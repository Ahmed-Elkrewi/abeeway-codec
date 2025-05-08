// Decoder for Abeeway Smart Badge (E31001)
function decodeUplink(input) {
  const bytes = input.bytes;
  const port = input.fPort;
  let data = {};

  if (port === 1) {
    data.battery = bytes[0];
    data.temperature = bytes[1] - 50;
    data.motion = (bytes[2] & 0x01) === 1;
    data.gpsFix = (bytes[2] & 0x02) === 2;
    data.lat = (bytes[3] << 8 | bytes[4]) / 100;
    data.lng = (bytes[5] << 8 | bytes[6]) / 100;
  } else {
    data.error = "Unsupported port";
  }

  return {
    data: data,
    warnings: [],
    errors: []
  };
}