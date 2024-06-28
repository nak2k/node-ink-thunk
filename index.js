async function initInk() {
  const ink = await import('ink');
  Object.assign(module.exports, ink);
}

module.exports = { initInk };
