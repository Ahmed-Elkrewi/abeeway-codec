// Codec wrapper for Abeeway Smart Badge
function decode(input) {
  return decodeUplink(input);
}

function encode(input) {
  return encodeDownlink(input);
}