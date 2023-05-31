// 2694. Event Emitter
// https://leetcode.com/problems/event-emitter/
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, cb) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event).add(cb);

    return {
      unsubscribe: () => {
        if (!this.events.has(event)) return;
        this.events.get(event).delete(cb);
      },
    };
  }

  emit(event, args = []) {
    if (!this.events.has(event)) {
      return [];
    }

    const result = [];
    this.events.get(event).forEach((fn) => {
      result.push(fn(...args));
    });
    return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

function process(actions, values, outputs) {
  var obj = new EventEmitter();
  var map = new Map();
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const params = values[i];
    const expected = outputs[i];
    switch (action) {
      case 'EventEmitter': {
        obj = new EventEmitter();
        break;
      }
      case 'emit': {
        const result = ['emitted', obj.emit(...params)];
        console.log(result, JSON.stringify(result) === JSON.stringify(expected));
        break;
      }
      case 'subscribe': {
        const sub = obj.subscribe(...params);
        map.set(params[0], sub);
        break;
      }
      case 'unsubscribe': {
        const event = params[0];
        if (!map.has(event)) return;

        const sub = map.get(event);
        sub.unsubscribe();
        map.delete(event);
        break;
      }
    }
  }
}

var actions = ['EventEmitter', 'emit', 'subscribe', 'subscribe', 'emit'],
  values = [
    [],
    ['firstEvent'],
    [
      'firstEvent',
      function cb1() {
        return 5;
      },
    ],
    [
      'firstEvent',
      function cb2() {
        return 6;
      },
    ],
    ['firstEvent'],
  ];
var outputs = [[], ['emitted', []], ['subscribed'], ['subscribed'], ['emitted', [5, 6]]];
process(actions, values, outputs);

var actions = ['EventEmitter', 'subscribe', 'emit', 'emit'],
  values = [
    [],
    [
      'firstEvent',
      function cb1(...args) {
        return args.join(',');
      },
    ],
    ['firstEvent', [1, 2, 3]],
    ['firstEvent', [3, 4, 6]],
  ];
var outputs = [[], ['subscribed'], ['emitted', ['1,2,3']], ['emitted', ['3,4,6']]];
process(actions, values, outputs);

var actions = ['EventEmitter', 'subscribe', 'emit', 'unsubscribe', 'emit'],
  values = [[], ['firstEvent', (...args) => args.join(',')], ['firstEvent', [1, 2, 3]], [0], ['firstEvent', [4, 5, 6]]];
var outputs = [[], ['subscribed'], ['emitted', ['1,2,3']], ['unsubscribed', 0], ['emitted', []]];
process(actions, values, outputs);
