import matchers from '@testing-library/jest-dom/matchers';
import { expect, beforeAll, afterAll, afterEach } from 'vitest';

import '@testing-library/react';
import { fetch } from 'cross-fetch';

import { server } from './src/mocks/server';

global.fetch = fetch;

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

expect.extend(matchers);
