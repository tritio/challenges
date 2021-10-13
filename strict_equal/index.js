function strictEqual(a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) return false;
  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  )
    return true;
  return Object.is(a, b);
}

console.log(strictEqual(0, -0));

/* Execute to scanner:
   sonar-scanner \
  -Dsonar.projectKey=strict_equal \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://127.0.0.1:9000 \
  -Dsonar.login=be7b9df2c2e049d2bc029bb9ee6459b35ab73b61 */
