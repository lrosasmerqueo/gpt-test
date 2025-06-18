import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchTweets } from '../web-app/fetchTweets.js';

const originalFetch = global.fetch;

test('fetchTweets returns tweets array', async () => {
  global.fetch = async (url, options) => {
    assert.strictEqual(url, 'https://api.twitter.com/2/users/123/tweets');
    assert.strictEqual(options.headers.Authorization, 'Bearer TOKEN');
    return {
      ok: true,
      async json() {
        return { data: [{ id: '1', text: 'hello' }] };
      },
    };
  };

  try {
    const tweets = await fetchTweets('TOKEN', '123');
    assert.deepStrictEqual(tweets, [{ id: '1', text: 'hello' }]);
  } finally {
    global.fetch = originalFetch;
  }
});

test('fetchTweets throws when response not ok', async () => {
  global.fetch = async () => ({ ok: false });
  try {
    await assert.rejects(() => fetchTweets('TOKEN', '123'));
  } finally {
    global.fetch = originalFetch;
  }
});
