const ALL_LEVELS = [
  {
    "difficulty": "easy",
    "name": "Ice Break",
    "cols": 6,
    "rows": 5,
    "par": 5,
    "time": 42,
    "mechanics": [
      "Ice ❄"
    ],
    "hint": "Once a block hits ice, it keeps sliding in that direction.",
    "ice": [
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 4,
        "y": 2
      }
    ],
    "blocks": [
      {
        "id": "b1",
        "color": "blue",
        "x": 1,
        "y": 2
      },
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 4
      },
      {
        "id": "g1",
        "color": "green",
        "x": 4,
        "y": 0
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 5,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "ice-break"
  },
  {
    "difficulty": "easy",
    "name": "Corner Cut",
    "cols": 5,
    "rows": 5,
    "par": 6,
    "time": 35,
    "mechanics": [
      "Irregular board"
    ],
    "hint": "Missing tiles change what counts as an edge.",
    "voids": [
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 4,
        "y": 0
      },
      {
        "x": 4,
        "y": 1
      }
    ],
    "walls": [
      {
        "x": 2,
        "y": 2
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 3
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 2,
        "y": 1
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 3,
        "y": 3
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 3,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 3,
        "dir": "right"
      }
    ],
    "id": "corner-cut"
  },
  {
    "difficulty": "easy",
    "name": "Pocket Turn",
    "cols": 6,
    "rows": 6,
    "par": 6,
    "time": 42,
    "mechanics": [
      "Irregular board"
    ],
    "hint": "The missing corner opens a shortcut. Use the shape, not just the outer edge.",
    "voids": [
      {
        "x": 4,
        "y": 0
      },
      {
        "x": 5,
        "y": 0
      },
      {
        "x": 5,
        "y": 1
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 4
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 3,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 4,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 3,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 5,
        "y": 4,
        "dir": "right"
      }
    ],
    "id": "pocket-turn"
  },
  {
    "difficulty": "easy",
    "name": "Short Slide",
    "cols": 6,
    "rows": 6,
    "par": 6,
    "time": 44,
    "mechanics": [
      "Ice ❄"
    ],
    "hint": "Use the ice lane for one fast move, then finish the other colors normally.",
    "ice": [
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 3
      }
    ],
    "blocks": [
      {
        "id": "b1",
        "color": "blue",
        "x": 1,
        "y": 3
      },
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 5
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 4,
        "y": 1
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 5,
        "y": 3,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "short-slide"
  },
  {
    "difficulty": "easy",
    "name": "Side Door",
    "cols": 6,
    "rows": 6,
    "par": 6,
    "time": 48,
    "mechanics": [
      "Portal ◎"
    ],
    "hint": "One color has a shortcut through the middle. Keep its landing cell clear.",
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 1,
          "y": 3
        },
        "b": {
          "x": 4,
          "y": 2
        }
      }
    ],
    "blocks": [
      {
        "id": "g1",
        "color": "green",
        "x": 0,
        "y": 3
      },
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 1
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 4,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 5,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "side-door"
  },
  {
    "difficulty": "easy",
    "name": "Warp 101",
    "cols": 6,
    "rows": 6,
    "par": 6,
    "time": 46,
    "mechanics": [
      "Portals ◎"
    ],
    "hint": "Step onto a portal to jump to its partner.",
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 2,
          "y": 4
        },
        "b": {
          "x": 4,
          "y": 1
        }
      }
    ],
    "blocks": [
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 4
      },
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 1
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 3,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 5,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 3,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "warp-101"
  },
  {
    "difficulty": "easy",
    "name": "First Flow",
    "cols": 5,
    "rows": 5,
    "par": 7,
    "time": 32,
    "mechanics": [
      "Slide",
      "Match"
    ],
    "hint": "Clear all three colors. Think about lanes before swiping.",
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 3
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 3,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 3,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 3,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 2,
        "y": 4,
        "dir": "down"
      }
    ],
    "id": "first-flow"
  },
  {
    "difficulty": "easy",
    "name": "Order Up",
    "cols": 6,
    "rows": 6,
    "par": 7,
    "time": 52,
    "mechanics": [
      "Exit order"
    ],
    "hint": "Four colors are close to home, but only one order is accepted.",
    "exitOrder": [
      "yellow",
      "blue",
      "red",
      "green"
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 3,
        "y": 4
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 5,
        "y": 3
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 4,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 3,
        "y": 5,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 3,
        "dir": "right"
      }
    ],
    "id": "order-up"
  },
  {
    "difficulty": "easy",
    "name": "Twin Gates",
    "cols": 6,
    "rows": 5,
    "par": 7,
    "time": 40,
    "mechanics": [
      "Same-color exits"
    ],
    "hint": "Two red blocks can leave through either red gate. Pick the cleaner lanes.",
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 1
      },
      {
        "id": "r2",
        "color": "red",
        "x": 4,
        "y": 3
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 2,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 5,
        "y": 3,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 2,
        "y": 4,
        "dir": "down"
      }
    ],
    "id": "twin-gates"
  },
  {
    "difficulty": "easy",
    "name": "Long Haul",
    "cols": 6,
    "rows": 6,
    "par": 8,
    "time": 42,
    "mechanics": [
      "Long blocks"
    ],
    "hint": "Long blocks take more room, so keep their lane clear.",
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 4,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 1,
        "w": 1,
        "h": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 4,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 2,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "long-haul"
  },
  {
    "difficulty": "easy",
    "name": "Tall Order",
    "cols": 6,
    "rows": 6,
    "par": 8,
    "time": 46,
    "mechanics": [
      "Long blocks"
    ],
    "hint": "A tall block needs a full lane. Make room before you commit.",
    "blocks": [
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 1,
        "w": 1,
        "h": 2
      },
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 4,
        "w": 2,
        "h": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 4,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "red",
        "x": 0,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 2,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "tall-order"
  },
  {
    "difficulty": "easy",
    "name": "Open Sesame",
    "cols": 6,
    "rows": 6,
    "par": 9,
    "time": 46,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥"
    ],
    "hint": "Touch the switch, then use the newly opened lane.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 4
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 3,
        "y": 2
      }
    ],
    "blocks": [
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 3
      },
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 1,
        "y": 5,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 5,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 5,
        "y": 4,
        "dir": "right"
      }
    ],
    "id": "open-sesame"
  },
  {
    "difficulty": "easy",
    "name": "The Lane",
    "cols": 7,
    "rows": 5,
    "par": 9,
    "time": 38,
    "mechanics": [
      "Corridors"
    ],
    "hint": "Use the openings instead of fighting the walls.",
    "walls": [
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 3
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 6,
        "y": 3,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 6,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "the-lane"
  },
  {
    "difficulty": "intermediate",
    "name": "Blue First",
    "cols": 6,
    "rows": 6,
    "par": 6,
    "time": 54,
    "mechanics": [
      "Exit order"
    ],
    "hint": "The exits work, but only in the displayed order.",
    "exitOrder": [
      "blue",
      "red",
      "green"
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 3,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 4,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 3,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "blue-first"
  },
  {
    "difficulty": "intermediate",
    "name": "Broken Square",
    "cols": 7,
    "rows": 6,
    "par": 6,
    "time": 58,
    "mechanics": [
      "Irregular board",
      "Internal exits"
    ],
    "hint": "Some exits are on the edge of a hole, not the outside wall.",
    "voids": [
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 0,
        "y": 0
      },
      {
        "x": 6,
        "y": 5
      }
    ],
    "walls": [
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 4,
        "y": 2
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 4
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 2,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 2,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 4,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "purple",
        "x": 2,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "broken-square"
  },
  {
    "difficulty": "intermediate",
    "name": "Ice Traffic",
    "cols": 7,
    "rows": 6,
    "par": 6,
    "time": 62,
    "mechanics": [
      "Ice ❄",
      "Order"
    ],
    "hint": "Clear the landing zone before sending a block down the ice lane.",
    "ice": [
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 4
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 3
      }
    ],
    "blocks": [
      {
        "id": "b1",
        "color": "blue",
        "x": 1,
        "y": 2
      },
      {
        "id": "r1",
        "color": "red",
        "x": 5,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 4,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 6,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 6,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 4,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "ice-traffic"
  },
  {
    "difficulty": "intermediate",
    "name": "Arrow Room",
    "cols": 6,
    "rows": 6,
    "par": 8,
    "time": 52,
    "mechanics": [
      "One-way →"
    ],
    "hint": "An arrow controls the direction of the block sitting on it.",
    "oneWays": [
      {
        "x": 2,
        "y": 3,
        "dir": "up"
      },
      {
        "x": 4,
        "y": 2,
        "dir": "right"
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 3
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 3
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 2
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 1,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "blue",
        "x": 5,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 0,
        "y": 4,
        "dir": "left"
      }
    ],
    "id": "arrow-room"
  },
  {
    "difficulty": "intermediate",
    "name": "Blocked Warp",
    "cols": 7,
    "rows": 6,
    "par": 8,
    "time": 60,
    "mechanics": [
      "Portals ◎",
      "Traffic"
    ],
    "hint": "A portal only fires when its destination has room.",
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 2,
          "y": 4
        },
        "b": {
          "x": 5,
          "y": 1
        }
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 4
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 4,
        "y": 3
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 6,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 5,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 4,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "blocked-warp"
  },
  {
    "difficulty": "intermediate",
    "name": "Cold Storage",
    "cols": 7,
    "rows": 7,
    "par": 8,
    "time": 78,
    "mechanics": [
      "Ice ❄",
      "Switch ◆",
      "Barrier ▥"
    ],
    "hint": "Ice can carry you onto a switch — or past the space you needed.",
    "ice": [
      {
        "x": 1,
        "y": 3
      },
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 3
      }
    ],
    "switches": [
      {
        "id": "A",
        "x": 4,
        "y": 3
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 5,
        "y": 1
      }
    ],
    "walls": [
      {
        "x": 2,
        "y": 1
      },
      {
        "x": 3,
        "y": 1
      }
    ],
    "blocks": [
      {
        "id": "b1",
        "color": "blue",
        "x": 0,
        "y": 3
      },
      {
        "id": "r1",
        "color": "red",
        "x": 4,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 6,
        "y": 3,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 6,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 2,
        "y": 6,
        "dir": "down"
      }
    ],
    "id": "cold-storage"
  },
  {
    "difficulty": "intermediate",
    "name": "Split Chamber",
    "cols": 8,
    "rows": 7,
    "par": 8,
    "time": 104,
    "mechanics": [
      "Irregular board",
      "Portals ◎",
      "Internal exits"
    ],
    "hint": "The board is split into chambers. Treat portals like hallways and holes like edges.",
    "voids": [
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 4,
        "y": 0
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 3,
        "y": 6
      },
      {
        "x": 4,
        "y": 6
      }
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 2,
          "y": 3
        },
        "b": {
          "x": 5,
          "y": 3
        }
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 5
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 5
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 6,
        "y": 1
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 2,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 5,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 0,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 7,
        "y": 1,
        "dir": "right"
      }
    ],
    "id": "split-chamber"
  },
  {
    "difficulty": "intermediate",
    "name": "False Start",
    "cols": 7,
    "rows": 7,
    "par": 9,
    "time": 92,
    "mechanics": [
      "Exit order",
      "Portals ◎"
    ],
    "hint": "Several exits look ready. Only one sequence keeps the board open.",
    "exitOrder": [
      "blue",
      "purple",
      "red",
      "green"
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 1,
          "y": 5
        },
        "b": {
          "x": 5,
          "y": 1
        }
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 4
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 2,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 6,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "purple",
        "x": 6,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 0,
        "y": 4,
        "dir": "left"
      }
    ],
    "id": "false-start"
  },
  {
    "difficulty": "intermediate",
    "name": "Open the Door",
    "cols": 6,
    "rows": 6,
    "par": 9,
    "time": 50,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥"
    ],
    "hint": "Touch the switch first. The matching barrier stays open after activation.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 4
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 3,
        "y": 2
      }
    ],
    "blocks": [
      {
        "id": "b1",
        "color": "blue",
        "x": 1,
        "y": 3
      },
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 4,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 1,
        "y": 5,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 5,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 5,
        "y": 4,
        "dir": "right"
      }
    ],
    "id": "open-the-door"
  },
  {
    "difficulty": "intermediate",
    "name": "Big Pieces",
    "cols": 7,
    "rows": 7,
    "par": 10,
    "time": 80,
    "mechanics": [
      "Long blocks",
      "Corridors"
    ],
    "hint": "Long blocks can become moving walls. Park them carefully.",
    "walls": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 5
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 4,
        "w": 2,
        "h": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 4
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 4,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 6,
        "y": 4,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "purple",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "big-pieces"
  },
  {
    "difficulty": "intermediate",
    "name": "Portal Traffic",
    "cols": 7,
    "rows": 7,
    "par": 10,
    "time": 76,
    "mechanics": [
      "2 portals",
      "Traffic"
    ],
    "hint": "The fastest route may be unavailable until another block clears a destination.",
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 1,
          "y": 5
        },
        "b": {
          "x": 5,
          "y": 1
        }
      },
      {
        "id": "B",
        "a": {
          "x": 1,
          "y": 1
        },
        "b": {
          "x": 5,
          "y": 5
        }
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 4
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 2
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 5,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 6,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 5,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 6,
        "y": 5,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 6,
        "dir": "down"
      }
    ],
    "id": "portal-traffic"
  },
  {
    "difficulty": "intermediate",
    "name": "Sequence Breaker",
    "cols": 7,
    "rows": 7,
    "par": 10,
    "time": 84,
    "mechanics": [
      "Exit order",
      "Switch ◆",
      "Barrier ▥"
    ],
    "hint": "The required exit order and the locked lane pull you in opposite directions.",
    "exitOrder": [
      "green",
      "blue",
      "red",
      "yellow"
    ],
    "switches": [
      {
        "id": "A",
        "x": 2,
        "y": 5
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 4,
        "y": 1
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 4,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 1,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 4
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 5,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 4,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "yellow",
        "x": 6,
        "y": 4,
        "dir": "right"
      }
    ],
    "id": "sequence-breaker"
  },
  {
    "difficulty": "intermediate",
    "name": "Thin Ice",
    "cols": 8,
    "rows": 7,
    "par": 11,
    "time": 96,
    "mechanics": [
      "Ice ❄",
      "One-way →"
    ],
    "hint": "Momentum and arrows remove your ability to correct a bad setup move.",
    "ice": [
      {
        "x": 2,
        "y": 3
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 5,
        "y": 4
      }
    ],
    "oneWays": [
      {
        "x": 1,
        "y": 3,
        "dir": "right"
      },
      {
        "x": 5,
        "y": 5,
        "dir": "up"
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 4,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 3
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 5
      },
      {
        "id": "g1",
        "color": "green",
        "x": 6,
        "y": 1
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 1,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 7,
        "y": 3,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 5,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 7,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 0,
        "y": 5,
        "dir": "left"
      }
    ],
    "id": "thin-ice"
  },
  {
    "difficulty": "hard",
    "name": "Backtrack Bay",
    "cols": 8,
    "rows": 8,
    "par": 11,
    "time": 82,
    "mechanics": [
      "Long blocks",
      "Exit order"
    ],
    "hint": "The first useful move is not always toward an exit. Make room, then come back.",
    "exitOrder": [
      "purple",
      "green",
      "blue",
      "red"
    ],
    "walls": [
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 5,
        "y": 3
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 5
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 5
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 5,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "purple",
        "x": 5,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 2,
        "y": 7,
        "dir": "down"
      },
      {
        "color": "blue",
        "x": 7,
        "y": 5,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      }
    ],
    "id": "backtrack-bay"
  },
  {
    "difficulty": "hard",
    "name": "Cold Corner",
    "cols": 8,
    "rows": 8,
    "par": 12,
    "time": 86,
    "mechanics": [
      "Ice ❄",
      "Switch ◆",
      "Barrier ▥"
    ],
    "hint": "Use the ice lane to hit the switch, then route the remaining colors through the opened side.",
    "ice": [
      {
        "x": 1,
        "y": 4
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "switches": [
      {
        "id": "A",
        "x": 3,
        "y": 4
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 6,
        "y": 2
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      }
    ],
    "blocks": [
      {
        "id": "g1",
        "color": "green",
        "x": 0,
        "y": 4
      },
      {
        "id": "r1",
        "color": "red",
        "x": 5,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 2,
        "y": 6
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 6,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 7,
        "y": 4,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 7,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 2,
        "y": 7,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 6,
        "y": 7,
        "dir": "down"
      }
    ],
    "id": "cold-corner"
  },
  {
    "difficulty": "hard",
    "name": "Detour Doors",
    "cols": 9,
    "rows": 9,
    "par": 12,
    "time": 88,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥",
      "Exit order"
    ],
    "hint": "The required order is easy to read. The locked lane is what makes the route matter.",
    "exitOrder": [
      "purple",
      "green",
      "blue",
      "red"
    ],
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 7
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 6,
        "y": 3
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 6
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 6
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 6,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "purple",
        "x": 8,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 0,
        "y": 6,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 8,
        "y": 6,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      }
    ],
    "id": "detour-doors"
  },
  {
    "difficulty": "hard",
    "name": "Wide Traffic",
    "cols": 10,
    "rows": 10,
    "par": 14,
    "time": 92,
    "mechanics": [
      "Long blocks",
      "Traffic",
      "Exit order"
    ],
    "hint": "Five pieces share only a few clean lanes. Stage them before you start clearing.",
    "exitOrder": [
      "purple",
      "green",
      "yellow",
      "blue",
      "red"
    ],
    "walls": [
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 5,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 7,
        "w": 2,
        "h": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 7,
        "w": 1,
        "h": 2
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 7,
        "y": 1,
        "w": 1,
        "h": 2
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 4,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "purple",
        "x": 7,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 2,
        "y": 9,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 9,
        "y": 5,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 9,
        "y": 7,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      }
    ],
    "id": "wide-traffic"
  },
  {
    "difficulty": "hard",
    "name": "Double Lock",
    "cols": 7,
    "rows": 7,
    "par": 16,
    "time": 70,
    "mechanics": [
      "2 switches",
      "2 barriers"
    ],
    "hint": "Each switch opens only its matching barrier. Choose which lane to unlock first.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 5
      },
      {
        "id": "B",
        "x": 5,
        "y": 1
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 3,
        "y": 4
      },
      {
        "id": "B",
        "x": 3,
        "y": 2
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 0
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 3,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 4
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 4
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 5,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 6,
        "y": 4,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 1,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "double-lock"
  },
  {
    "difficulty": "hard",
    "name": "Portal Cross",
    "cols": 9,
    "rows": 9,
    "par": 16,
    "time": 94,
    "mechanics": [
      "2 portals",
      "Traffic"
    ],
    "hint": "Both shortcuts are useful, but only if you keep their landing squares open.",
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 1,
          "y": 7
        },
        "b": {
          "x": 7,
          "y": 1
        }
      },
      {
        "id": "B",
        "a": {
          "x": 1,
          "y": 1
        },
        "b": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 4,
        "y": 5
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 6
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 2
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 8,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 7,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "green",
        "x": 8,
        "y": 7,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 7,
        "y": 8,
        "dir": "down"
      }
    ],
    "id": "portal-cross"
  },
  {
    "difficulty": "hard",
    "name": "Portal Sequence",
    "cols": 9,
    "rows": 9,
    "par": 16,
    "time": 96,
    "mechanics": [
      "2 portals",
      "Exit order"
    ],
    "hint": "The portals shorten distance, but the required exit order makes timing the jumps matter.",
    "exitOrder": [
      "yellow",
      "red",
      "green",
      "blue"
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 1,
          "y": 7
        },
        "b": {
          "x": 7,
          "y": 1
        }
      },
      {
        "id": "B",
        "a": {
          "x": 1,
          "y": 1
        },
        "b": {
          "x": 7,
          "y": 7
        }
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 6
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 2
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "yellow",
        "x": 7,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 8,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 8,
        "y": 7,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 7,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "portal-sequence"
  },
  {
    "difficulty": "hard",
    "name": "Moving Walls",
    "cols": 8,
    "rows": 8,
    "par": 17,
    "time": 108,
    "mechanics": [
      "Long blocks",
      "Switch ◆",
      "One-way →"
    ],
    "hint": "The long blocks are both cargo and obstacles. Moving one changes the whole maze.",
    "switches": [
      {
        "id": "A",
        "x": 2,
        "y": 6
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 6,
        "y": 3
      }
    ],
    "oneWays": [
      {
        "x": 4,
        "y": 5,
        "dir": "up"
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 3
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 5,
        "w": 2,
        "h": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 5
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 4,
        "y": 5
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 6,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 7,
        "y": 5,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 2,
        "y": 7,
        "dir": "down"
      },
      {
        "color": "purple",
        "x": 4,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "yellow",
        "x": 7,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "moving-walls"
  },
  {
    "difficulty": "hard",
    "name": "Arrow Circuit",
    "cols": 8,
    "rows": 8,
    "par": 18,
    "time": 98,
    "mechanics": [
      "One-way →",
      "Traffic"
    ],
    "hint": "The arrows remove your ability to improvise later. Set the lanes before entering them.",
    "oneWays": [
      {
        "x": 2,
        "y": 5,
        "dir": "up"
      },
      {
        "x": 5,
        "y": 2,
        "dir": "left"
      },
      {
        "x": 4,
        "y": 6,
        "dir": "right"
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 5
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 6
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 4,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 0,
        "y": 6,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 7,
        "y": 6,
        "dir": "right"
      }
    ],
    "id": "arrow-circuit"
  },
  {
    "difficulty": "hard",
    "name": "Barrier Bridge",
    "cols": 9,
    "rows": 7,
    "par": 20,
    "time": 104,
    "mechanics": [
      "2 switches",
      "2 barriers"
    ],
    "hint": "The center wall has two doors. Open the right one at the right time or create a traffic jam.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 5
      },
      {
        "id": "B",
        "x": 7,
        "y": 1
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 4,
        "y": 2
      },
      {
        "id": "B",
        "x": 4,
        "y": 4
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 0
      },
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 4
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 4
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 8,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 1,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 7,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "barrier-bridge"
  },
  {
    "difficulty": "hard",
    "name": "Twin Switch",
    "cols": 9,
    "rows": 8,
    "par": 20,
    "time": 102,
    "mechanics": [
      "2 switches",
      "2 barriers",
      "Traffic"
    ],
    "hint": "Each switch opens a different crossing. Decide which side gets access first.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 6
      },
      {
        "id": "B",
        "x": 7,
        "y": 1
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 5,
        "y": 2
      },
      {
        "id": "B",
        "x": 3,
        "y": 5
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 4,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 5
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 5
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 8,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 1,
        "y": 7,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 7,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "twin-switch"
  },
  {
    "difficulty": "hard",
    "name": "Switchback",
    "cols": 8,
    "rows": 8,
    "par": 23,
    "time": 108,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥",
      "Traffic"
    ],
    "hint": "You will need to move away from an exit to unlock the lane that eventually gets you home.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 6
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 5,
        "y": 2
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 2
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 5,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 5
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 5
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 5,
        "y": 1
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 7,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 1,
        "y": 7,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "switchback"
  },
  {
    "difficulty": "extreme",
    "name": "Crosswind",
    "cols": 7,
    "rows": 7,
    "par": 20,
    "time": 72,
    "mechanics": [
      "One-way →",
      "Irregular board"
    ],
    "hint": "The shape gives you room, the arrows take some of it back.",
    "voids": [
      {
        "x": 0,
        "y": 0
      },
      {
        "x": 1,
        "y": 0
      },
      {
        "x": 5,
        "y": 0
      },
      {
        "x": 6,
        "y": 0
      },
      {
        "x": 0,
        "y": 6
      },
      {
        "x": 1,
        "y": 6
      },
      {
        "x": 5,
        "y": 6
      },
      {
        "x": 6,
        "y": 6
      }
    ],
    "oneWays": [
      {
        "x": 3,
        "y": 4,
        "dir": "up"
      },
      {
        "x": 2,
        "y": 3,
        "dir": "left"
      },
      {
        "x": 4,
        "y": 3,
        "dir": "right"
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 3,
        "y": 4
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 2,
        "y": 3
      },
      {
        "id": "g1",
        "color": "green",
        "x": 4,
        "y": 3
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 3,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 3,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 3,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 6,
        "y": 3,
        "dir": "right"
      },
      {
        "color": "purple",
        "x": 3,
        "y": 6,
        "dir": "down"
      }
    ],
    "id": "crosswind"
  },
  {
    "difficulty": "extreme",
    "name": "The Gauntlet",
    "cols": 8,
    "rows": 8,
    "par": 21,
    "time": 118,
    "mechanics": [
      "Ice ❄",
      "Portal ◎",
      "Switch ◆",
      "Exit order"
    ],
    "hint": "Read the entire board first. Every mechanic matters and every early move changes a later lane.",
    "exitOrder": [
      "green",
      "blue",
      "purple",
      "red",
      "yellow"
    ],
    "ice": [
      {
        "x": 1,
        "y": 4
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 3,
        "y": 4
      }
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 3,
          "y": 6
        },
        "b": {
          "x": 6,
          "y": 1
        }
      }
    ],
    "switches": [
      {
        "id": "A",
        "x": 3,
        "y": 4
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 5,
        "y": 2
      }
    ],
    "oneWays": [
      {
        "x": 6,
        "y": 5,
        "dir": "up"
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 0,
        "y": 4
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 3,
        "y": 6
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 6,
        "y": 5
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 7,
        "y": 4,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 7,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "purple",
        "x": 7,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 6,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "the-gauntlet"
  },
  {
    "difficulty": "extreme",
    "name": "Two Keys",
    "cols": 8,
    "rows": 7,
    "par": 23,
    "time": 100,
    "mechanics": [
      "2 switches",
      "Portals ◎",
      "Barriers ▥"
    ],
    "hint": "The keys are on opposite sides. The portal is the bridge — if its landing cell stays free.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 5
      },
      {
        "id": "B",
        "x": 6,
        "y": 1
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 5,
        "y": 4
      },
      {
        "id": "B",
        "x": 2,
        "y": 2
      }
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 2,
          "y": 5
        },
        "b": {
          "x": 5,
          "y": 1
        }
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 3
      },
      {
        "x": 4,
        "y": 3
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 4
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 4
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 5,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 7,
        "y": 4,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "purple",
        "x": 5,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "two-keys"
  },
  {
    "difficulty": "extreme",
    "name": "Arrow Lock",
    "cols": 9,
    "rows": 9,
    "par": 26,
    "time": 124,
    "mechanics": [
      "One-way →",
      "Switch ◆",
      "Barrier ▥",
      "Exit order"
    ],
    "hint": "The arrow lanes are commitments. The switch and exit order determine when those commitments are safe.",
    "exitOrder": [
      "blue",
      "green",
      "red",
      "yellow"
    ],
    "oneWays": [
      {
        "x": 2,
        "y": 6,
        "dir": "up"
      },
      {
        "x": 6,
        "y": 2,
        "dir": "left"
      }
    ],
    "switches": [
      {
        "id": "A",
        "x": 2,
        "y": 4
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 6,
        "y": 4
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 6
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 4
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 6,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 8,
        "y": 4,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "yellow",
        "x": 6,
        "y": 8,
        "dir": "down"
      }
    ],
    "id": "arrow-lock"
  },
  {
    "difficulty": "extreme",
    "name": "Split Relay",
    "cols": 9,
    "rows": 9,
    "par": 26,
    "time": 126,
    "mechanics": [
      "Irregular board",
      "Portal ◎",
      "Exit order"
    ],
    "hint": "The two halves barely connect. Use the portal as shared infrastructure and avoid blocking it.",
    "exitOrder": [
      "green",
      "red",
      "yellow",
      "blue"
    ],
    "voids": [
      {
        "x": 4,
        "y": 0
      },
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 4,
        "y": 7
      },
      {
        "x": 4,
        "y": 8
      }
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 3,
          "y": 4
        },
        "b": {
          "x": 5,
          "y": 4
        }
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 6
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 6
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 8,
        "y": 6,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 3,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 6,
        "dir": "left"
      }
    ],
    "id": "split-relay"
  },
  {
    "difficulty": "extreme",
    "name": "Key Exchange",
    "cols": 9,
    "rows": 9,
    "par": 28,
    "time": 130,
    "mechanics": [
      "2 switches",
      "2 barriers",
      "Exit order"
    ],
    "hint": "The keys sit on opposite sides and the exit order forces repeated crossings. Plan the whole sequence first.",
    "exitOrder": [
      "green",
      "purple",
      "blue",
      "red"
    ],
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 7
      },
      {
        "id": "B",
        "x": 7,
        "y": 1
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 5,
        "y": 2
      },
      {
        "id": "B",
        "x": 3,
        "y": 6
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 4,
        "y": 7
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 6
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 6
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 6,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 8,
        "y": 6,
        "dir": "right"
      },
      {
        "color": "purple",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 8,
        "y": 6,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      }
    ],
    "id": "key-exchange"
  },
  {
    "difficulty": "extreme",
    "name": "Four Locks",
    "cols": 10,
    "rows": 9,
    "par": 30,
    "time": 134,
    "mechanics": [
      "2 switches",
      "2 barriers",
      "Exit order"
    ],
    "hint": "Both doors matter twice: once for access and again for the required exit sequence.",
    "exitOrder": [
      "green",
      "purple",
      "blue",
      "red"
    ],
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 7
      },
      {
        "id": "B",
        "x": 8,
        "y": 1
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 6,
        "y": 2
      },
      {
        "id": "B",
        "x": 3,
        "y": 6
      }
    ],
    "walls": [
      {
        "x": 5,
        "y": 1
      },
      {
        "x": 5,
        "y": 3
      },
      {
        "x": 5,
        "y": 4
      },
      {
        "x": 5,
        "y": 5
      },
      {
        "x": 5,
        "y": 7
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 6
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 6
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 7,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 9,
        "y": 6,
        "dir": "right"
      },
      {
        "color": "purple",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 9,
        "y": 6,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 0,
        "y": 2,
        "dir": "left"
      }
    ],
    "id": "four-locks"
  },
  {
    "difficulty": "extreme",
    "name": "Frozen Maze",
    "cols": 10,
    "rows": 9,
    "par": 32,
    "time": 138,
    "mechanics": [
      "Ice ❄",
      "One-way →",
      "Exit order"
    ],
    "hint": "Momentum and one-way tiles punish early mistakes. Stage every block before committing to the ice.",
    "exitOrder": [
      "blue",
      "green",
      "yellow",
      "red"
    ],
    "ice": [
      {
        "x": 1,
        "y": 4
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 6,
        "y": 4
      },
      {
        "x": 7,
        "y": 4
      },
      {
        "x": 8,
        "y": 4
      }
    ],
    "oneWays": [
      {
        "x": 2,
        "y": 7,
        "dir": "up"
      },
      {
        "x": 7,
        "y": 1,
        "dir": "down"
      }
    ],
    "walls": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 5,
        "y": 5
      },
      {
        "x": 5,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 8,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 7
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 1
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "yellow",
        "x": 7,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 9,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "frozen-maze"
  },
  {
    "difficulty": "extreme",
    "name": "Four Corners",
    "cols": 9,
    "rows": 9,
    "par": 36,
    "time": 144,
    "mechanics": [
      "Traffic",
      "Long routes"
    ],
    "hint": "Every corner wants the opposite side. The center is the only shared breathing room.",
    "walls": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 6,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 7
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 7
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 8,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 8,
        "y": 7,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 0,
        "y": 7,
        "dir": "left"
      }
    ],
    "id": "four-corners"
  },
  {
    "difficulty": "extreme",
    "name": "Spiral Route",
    "cols": 9,
    "rows": 9,
    "par": 36,
    "time": 146,
    "mechanics": [
      "Corridors",
      "Traffic"
    ],
    "hint": "The board looks open until you trace the walls. Each block must borrow the same few turning spaces.",
    "walls": [
      {
        "x": 2,
        "y": 1
      },
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 5,
        "y": 1
      },
      {
        "x": 6,
        "y": 1
      },
      {
        "x": 6,
        "y": 2
      },
      {
        "x": 6,
        "y": 3
      },
      {
        "x": 6,
        "y": 4
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 3,
        "y": 4
      },
      {
        "x": 4,
        "y": 4
      },
      {
        "x": 2,
        "y": 5
      },
      {
        "x": 2,
        "y": 6
      },
      {
        "x": 3,
        "y": 7
      },
      {
        "x": 4,
        "y": 7
      },
      {
        "x": 5,
        "y": 7
      },
      {
        "x": 6,
        "y": 7
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 6
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 8,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 6,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 8,
        "y": 6,
        "dir": "right"
      }
    ],
    "id": "spiral-route"
  },
  {
    "difficulty": "extreme",
    "name": "Center Exchange",
    "cols": 9,
    "rows": 9,
    "par": 40,
    "time": 152,
    "mechanics": [
      "Traffic",
      "Exit order"
    ],
    "hint": "Four colors must cross the same center while leaving in a fixed order. Parking decisions are the puzzle.",
    "exitOrder": [
      "blue",
      "green",
      "red",
      "yellow"
    ],
    "walls": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 4,
        "y": 7
      },
      {
        "x": 2,
        "y": 4
      },
      {
        "x": 6,
        "y": 4
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 6
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 7,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "blue",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 8,
        "y": 6,
        "dir": "right"
      },
      {
        "color": "red",
        "x": 8,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 0,
        "y": 6,
        "dir": "left"
      }
    ],
    "id": "center-exchange"
  },
  {
    "difficulty": "extreme",
    "name": "Maze Exchange",
    "cols": 10,
    "rows": 10,
    "par": 46,
    "time": 160,
    "mechanics": [
      "Corridors",
      "Exit order",
      "Traffic"
    ],
    "hint": "This is a planning puzzle. Trace the corridors, reserve parking space, and respect the full exit sequence.",
    "exitOrder": [
      "yellow",
      "green",
      "blue",
      "red"
    ],
    "walls": [
      {
        "x": 4,
        "y": 1
      },
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 4,
        "y": 3
      },
      {
        "x": 4,
        "y": 5
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 4,
        "y": 7
      },
      {
        "x": 6,
        "y": 2
      },
      {
        "x": 6,
        "y": 3
      },
      {
        "x": 6,
        "y": 4
      },
      {
        "x": 2,
        "y": 5
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 6,
        "y": 6
      },
      {
        "x": 7,
        "y": 6
      }
    ],
    "blocks": [
      {
        "id": "r1",
        "color": "red",
        "x": 1,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 8,
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 8
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 8,
        "y": 8
      }
    ],
    "gates": [
      {
        "color": "yellow",
        "x": 0,
        "y": 8,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 9,
        "y": 8,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 9,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "maze-exchange"
  }
];

const DIFFICULTIES=["easy","intermediate","hard","extreme"];
const DIFFICULTY_LABELS={easy:"Easy",intermediate:"Intermediate",hard:"Hard",extreme:"Extreme ☠️"};
const savedDifficulty=localStorage.getItem("bf-difficulty");
const ACTIVE_DIFFICULTY=DIFFICULTIES.includes(savedDifficulty)?savedDifficulty:"easy";
let LEVELS=ALL_LEVELS.filter(item=>item.difficulty===ACTIVE_DIFFICULTY);
