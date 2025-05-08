// Encoder for Abeeway Smart Badge (E31001)
function encodeDownlink(input) {
  const data = input.data;
  const bytes = [];

  if (data.command === "set_interval") {
    bytes.push(0x01);
    bytes.push(data.interval || 10); // Default 10 seconds
  } else {
    return {
      errors: ["Unsupported command"]
    };
  }

  return {
    bytes: bytes,
    fPort: 1
  };
}