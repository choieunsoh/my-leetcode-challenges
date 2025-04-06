// Wrong Answer
// 616 / 746 testcases passed
/**
 * @param {number} memoryLimit
 */
var Router = function (memoryLimit) {
  this.memoryLimit = memoryLimit;
  this.packets = new Array(memoryLimit).fill(null);
  this.addIndex = 0;
  this.forwardIndex = 0;
  this.seenPackets = new Set();
  this.destinations = new Map();
};

/**
 * @param {number} source
 * @param {number} destination
 * @param {number} timestamp
 * @return {boolean}
 */
Router.prototype.addPacket = function (source, destination, timestamp) {
  const packetKey = `${source}-${destination}-${timestamp}`;
  if (this.seenPackets.has(packetKey)) {
    return false;
  }

  this.seenPackets.add(packetKey);
  this.packets[this.addIndex] = [source, destination, timestamp];

  if (!this.destinations.has(destination)) {
    this.destinations.set(destination, new Map());
  }
  this.destinations.get(destination).set(packetKey, [source, destination, timestamp]);
  console.log('A', packetKey, this.destinations);

  if (++this.addIndex === this.memoryLimit) {
    this.addIndex = 0;
    this.forwardIndex = (this.forwardIndex + 1) % this.memoryLimit;

    /*const packet = this.packets[0];
    if (packet) {
      const key = packet.join('-');
      this.seenPackets.delete(key);

      const destPackets = this.destinations.get(packet[1]);
      if (destPackets) {
        destPackets.delete(key);
        if (destPackets.size === 0) {
          this.destinations.delete(packet[1]);
        }
      }
    }*/
  }

  return true;
};

/**
 * @return {number[]}
 */
Router.prototype.forwardPacket = function () {
  const packet = this.packets[this.forwardIndex];
  if (!packet) {
    return [];
  }

  const packetKey = packet.join('-');
  this.seenPackets.delete(packetKey);

  const destPackets = this.destinations.get(packet[1]);
  if (destPackets) {
    destPackets.delete(packetKey);
    if (destPackets.size === 0) {
      this.destinations.delete(packet[1]);
    }
  }

  this.packets[this.forwardIndex] = null;
  this.forwardIndex = (this.forwardIndex + 1) % this.memoryLimit;
  return packet;
};

/**
 * @param {number} destination
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
Router.prototype.getCount = function (destination, startTime, endTime) {
  let count = 0;
  if (this.destinations.has(destination)) {
    const packets = this.destinations.get(destination);
    for (const packet of packets.values()) {
      const timestamp = packet[2];
      if (timestamp >= startTime && timestamp <= endTime) {
        count++;
      }
    }
  }
  return count;
};

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'Router':
        obj = new Router(input[0]);
        break;
      case 'addPacket':
        result = obj.addPacket(...input);
        break;
      case 'forwardPacket':
        result = obj.forwardPacket();
        break;
      case 'getCount':
        result = obj.getCount(...input);
        break;
    }
    console.log(op, input, expected, result, JSON.stringify(result) === JSON.stringify(expected));

    const { packets, seenPackets, destinations, forwardIndex, addIndex } = obj;
    console.log(packets);
    console.log(seenPackets);
    console.log(destinations);
    console.log({ forwardIndex, addIndex });
  }
  console.log('-------------------------------------');
}

var ops = [
    'Router',
    'addPacket',
    'addPacket',
    'addPacket',
    'addPacket',
    'addPacket',
    'forwardPacket',
    'addPacket',
    'getCount',
  ],
  inputs = [[3], [1, 4, 90], [2, 5, 90], [1, 4, 90], [3, 5, 95], [4, 5, 105], [], [5, 2, 110], [5, 100, 110]],
  outputs = [null, true, true, false, true, true, [2, 5, 90], true, 1];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'forwardPacket', 'forwardPacket'],
  inputs = [[2], [7, 4, 90], [], []],
  outputs = [null, true, [7, 4, 90], []];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'forwardPacket', 'getCount'],
  inputs = [[2], [2, 5, 1], [], [5, 1, 1]],
  outputs = [null, true, [2, 5, 1], 0];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'addPacket', 'addPacket', 'getCount'],
  inputs = [[2], [4, 3, 1], [5, 4, 1], [2, 3, 4], [4, 1, 3]],
  outputs = [null, true, true, true, 1];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'addPacket', 'getCount'],
  inputs = [[2], [3, 1, 1], [5, 2, 2], [1, 1, 1]],
  outputs = [null, true, true, 1];
run(ops, inputs, outputs);

var ops = ['Router', 'addPacket', 'forwardPacket', 'addPacket', 'forwardPacket'],
  inputs = [[2], [5, 1, 5], [], [4, 2, 5], []],
  outputs = [null, true, [5, 1, 5], true, [4, 2, 5]];
run(ops, inputs, outputs);
