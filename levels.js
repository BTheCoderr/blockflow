const ALL_LEVELS = [
  {
    "difficulty": "easy",
    "name": "First Flow",
    "par": 20,
    "cols": 6,
    "rows": 6,
    "time": 45,
    "mechanics": [
      "Slide",
      "Match"
    ],
    "hint": "The exits look open, but the center block has to move before the lanes clear.",
    "walls": [
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 3,
        "y": 3
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
        "x": 4,
        "y": 3
      },
      {
        "id": "g1",
        "color": "green",
        "x": 3,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 5,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 3,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 3,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "first-flow"
  },
  {
    "difficulty": "easy",
    "name": "Corner Cut",
    "par": 18,
    "cols": 6,
    "rows": 6,
    "time": 50,
    "mechanics": [
      "Walls",
      "Turns"
    ],
    "hint": "The straight route is blocked. Find the open corner before committing.",
    "walls": [
      {
        "x": 2,
        "y": 1
      },
      {
        "x": 2,
        "y": 2
      },
      {
        "x": 2,
        "y": 4
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
        "y": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 4,
        "y": 4
      },
      {
        "id": "g1",
        "color": "green",
        "x": 3,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 5,
        "y": 1,
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
        "x": 3,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "corner-cut"
  },
  {
    "difficulty": "easy",
    "name": "Lane Change",
    "par": 18,
    "cols": 7,
    "rows": 6,
    "time": 55,
    "mechanics": [
      "Traffic",
      "Corridors"
    ],
    "hint": "Everyone wants the middle lane. Park one color before sending the next through.",
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
        "y": 4
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
        "y": 2
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
        "y": 3
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 4,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 6,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 3,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 2,
        "y": 5,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "lane-change"
  },
  {
    "difficulty": "easy",
    "name": "Pocket Turn",
    "par": 17,
    "cols": 7,
    "rows": 6,
    "time": 58,
    "mechanics": [
      "Irregular board",
      "Traffic"
    ],
    "hint": "The missing corner changes the edge. Use the pocket to make room.",
    "voids": [
      {
        "x": 5,
        "y": 0
      },
      {
        "x": 6,
        "y": 0
      },
      {
        "x": 6,
        "y": 1
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
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 4
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
        "color": "red",
        "x": 6,
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
        "x": 2,
        "y": 5,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "pocket-turn"
  },
  {
    "difficulty": "easy",
    "name": "Ice Break",
    "par": 12,
    "cols": 7,
    "rows": 6,
    "time": 60,
    "mechanics": [
      "Ice ❄",
      "Traffic"
    ],
    "hint": "The ice lane is fast, but only after you clear its landing space.",
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
      }
    ],
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
        "id": "b1",
        "color": "blue",
        "x": 1,
        "y": 3
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
        "color": "blue",
        "x": 6,
        "y": 3,
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
        "x": 2,
        "y": 5,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 5,
        "dir": "down"
      }
    ],
    "id": "ice-break"
  },
  {
    "difficulty": "easy",
    "name": "Long Turn",
    "par": 12,
    "cols": 7,
    "rows": 7,
    "time": 65,
    "mechanics": [
      "Long blocks",
      "Traffic"
    ],
    "hint": "The long pieces need turning room. Clear the square block before forcing a lane.",
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
        "x": 1,
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 4,
        "w": 1,
        "h": 2
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
        "x": 4,
        "y": 1
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 6,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 5,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "green",
        "x": 0,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "long-turn"
  },
  {
    "difficulty": "easy",
    "name": "Pocket Portal",
    "par": 13,
    "cols": 7,
    "rows": 7,
    "time": 68,
    "mechanics": [
      "Portal ◎",
      "Traffic"
    ],
    "hint": "The portal is useful only if its landing tile stays open.",
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
        "y": 3
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
        "x": 5,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 2,
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
        "color": "green",
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
        "color": "blue",
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "pocket-portal"
  },
  {
    "difficulty": "easy",
    "name": "Switch Step",
    "par": 16,
    "cols": 7,
    "rows": 7,
    "time": 72,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥",
      "Traffic"
    ],
    "hint": "The switch opens the direct lane. Getting to the switch is the actual puzzle.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 5
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 4,
        "y": 2
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
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 4
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
        "x": 5,
        "y": 4
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
        "color": "green",
        "x": 1,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 6,
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
        "color": "yellow",
        "x": 5,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "switch-step"
  },
  {
    "difficulty": "easy",
    "name": "Twin Gates",
    "par": 10,
    "cols": 7,
    "rows": 6,
    "time": 75,
    "mechanics": [
      "Same-color exits",
      "Traffic"
    ],
    "hint": "Two red blocks share two exits. Decide which red clears which side before you move.",
    "walls": [
      {
        "x": 3,
        "y": 1
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
        "id": "r2",
        "color": "red",
        "x": 5,
        "y": 3
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
        "color": "red",
        "x": 6,
        "y": 3,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 2,
        "y": 5,
        "dir": "down"
      },
      {
        "color": "green",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "twin-gates"
  },
  {
    "difficulty": "easy",
    "name": "Warp 101",
    "par": 21,
    "cols": 7,
    "rows": 7,
    "time": 150,
    "boss": true,
    "bossTime": 150,
    "bossPar": 42,
    "mechanics": [
      "Portal ◎",
      "Traffic",
      "Boss"
    ],
    "hint": "Three waves use the same portal differently. Keep the landing zone open.",
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
        "x": 5,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 6,
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
        "x": 6,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 0,
        "y": 2,
        "dir": "left"
      }
    ],
    "phases": [
      {
        "label": "Portal setup",
        "intro": "Two colors share the portal lane. Make room before committing.",
        "par": 9,
        "blocks": [
          {
            "id": "r1",
            "color": "red",
            "x": 1,
            "y": 2
          },
          {
            "id": "g1",
            "color": "green",
            "x": 1,
            "y": 4
          }
        ],
        "gates": [
          {
            "color": "red",
            "x": 6,
            "y": 2,
            "dir": "right"
          },
          {
            "color": "green",
            "x": 6,
            "y": 1,
            "dir": "right"
          }
        ]
      },
      {
        "label": "Reverse traffic",
        "intro": "The second wave attacks the same arena from the other side.",
        "par": 12,
        "blocks": [
          {
            "id": "b1",
            "color": "blue",
            "x": 5,
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
            "color": "blue",
            "x": 0,
            "y": 4,
            "dir": "left"
          },
          {
            "color": "yellow",
            "x": 0,
            "y": 2,
            "dir": "left"
          }
        ]
      },
      {
        "label": "Full warp",
        "intro": "All four colors arrive. Keep the portal landing clear to finish.",
        "par": 21,
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
            "x": 5,
            "y": 2
          }
        ],
        "gates": [
          {
            "color": "red",
            "x": 6,
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
            "x": 6,
            "y": 1,
            "dir": "right"
          },
          {
            "color": "yellow",
            "x": 0,
            "y": 2,
            "dir": "left"
          }
        ]
      }
    ],
    "id": "warp-101"
  },
  {
    "difficulty": "easy",
    "name": "Color Queue",
    "par": 20,
    "cols": 7,
    "rows": 7,
    "time": 80,
    "mechanics": [
      "Exit order",
      "Traffic"
    ],
    "hint": "The exits are available, but only one color is allowed out at a time.",
    "exitOrder": [
      "green",
      "blue",
      "red",
      "yellow"
    ],
    "walls": [
      {
        "x": 3,
        "y": 2
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
        "x": 2,
        "y": 5
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
        "y": 2,
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
        "color": "yellow",
        "x": 5,
        "y": 6,
        "dir": "down"
      }
    ],
    "id": "color-queue"
  },
  {
    "difficulty": "easy",
    "name": "Cross Lane",
    "par": 16,
    "cols": 7,
    "rows": 7,
    "time": 82,
    "mechanics": [
      "Traffic",
      "Corridors"
    ],
    "hint": "Two colors cross the same center. Make a parking move before the first crossing.",
    "walls": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 1,
        "y": 3
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
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 4
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
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
        "color": "red",
        "x": 6,
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
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "cross-lane"
  },
  {
    "difficulty": "easy",
    "name": "Cold Traffic",
    "par": 12,
    "cols": 7,
    "rows": 7,
    "time": 85,
    "mechanics": [
      "Ice ❄",
      "Exit order",
      "Traffic"
    ],
    "hint": "The ice lane is blocked. Make room without sending the wrong color out.",
    "exitOrder": [
      "green",
      "blue",
      "red",
      "yellow"
    ],
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
      },
      {
        "x": 5,
        "y": 3
      }
    ],
    "walls": [
      {
        "x": 3,
        "y": 1
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
        "id": "b1",
        "color": "blue",
        "x": 0,
        "y": 3
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 5
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
        "x": 5,
        "y": 3
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
        "color": "green",
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 6,
        "dir": "down"
      }
    ],
    "id": "cold-traffic"
  },
  {
    "difficulty": "easy",
    "name": "Arrow Intro",
    "par": 12,
    "cols": 7,
    "rows": 7,
    "time": 88,
    "mechanics": [
      "One-way →",
      "Traffic"
    ],
    "hint": "Touching an arrow commits the next move. Set the board before you step on one.",
    "oneWays": [
      {
        "x": 2,
        "y": 4,
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
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "blue",
        "x": 6,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 0,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "arrow-intro"
  },
  {
    "difficulty": "easy",
    "name": "Long Haul",
    "par": 16,
    "cols": 8,
    "rows": 7,
    "time": 90,
    "mechanics": [
      "Long blocks",
      "Traffic"
    ],
    "hint": "The long blocks cannot turn through occupied space. Clear a turning bay first.",
    "walls": [
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
        "y": 4,
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
        "y": 4,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 2,
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
    "id": "long-haul"
  },
  {
    "difficulty": "easy",
    "name": "Side Door",
    "par": 15,
    "cols": 8,
    "rows": 7,
    "time": 92,
    "mechanics": [
      "Portal ◎",
      "Irregular board"
    ],
    "hint": "The missing edge and the portal create two routes. Only one keeps the center open.",
    "voids": [
      {
        "x": 6,
        "y": 0
      },
      {
        "x": 7,
        "y": 0
      },
      {
        "x": 7,
        "y": 1
      }
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 1,
          "y": 5
        },
        "b": {
          "x": 6,
          "y": 2
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
        "y": 4
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
        "x": 7,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "side-door"
  },
  {
    "difficulty": "easy",
    "name": "Open Sesame",
    "par": 18,
    "cols": 8,
    "rows": 7,
    "time": 95,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥",
      "Exit order"
    ],
    "hint": "Open the barrier first, then respect the color order through the shared lane.",
    "exitOrder": [
      "green",
      "blue",
      "red",
      "yellow"
    ],
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 5
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
        "y": 3
      },
      {
        "x": 4,
        "y": 3
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
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 4
      },
      {
        "id": "r1",
        "color": "red",
        "x": 2,
        "y": 2
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
        "color": "green",
        "x": 1,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 4,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 7,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 6,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "open-sesame"
  },
  {
    "difficulty": "easy",
    "name": "Easy Relay",
    "par": 21,
    "cols": 8,
    "rows": 8,
    "time": 100,
    "mechanics": [
      "Portal ◎",
      "Switch ◆",
      "Barrier ▥"
    ],
    "hint": "The switch and portal help different colors. Decide which job comes first.",
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 1,
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
        "id": "B",
        "x": 2,
        "y": 6
      }
    ],
    "barriers": [
      {
        "id": "B",
        "x": 5,
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
        "y": 5
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
        "y": 2
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
        "x": 0,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 7,
        "y": 1,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 6,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "easy-relay"
  },
  {
    "difficulty": "easy",
    "name": "Two Doors",
    "par": 20,
    "cols": 8,
    "rows": 8,
    "time": 180,
    "boss": true,
    "bossTime": 180,
    "bossPar": 42,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥",
      "Traffic",
      "Boss"
    ],
    "hint": "Three waves reuse two doors. Open space before opening the lane.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 6
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
        "x": 4,
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
        "y": 3
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
        "x": 2,
        "y": 2
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
        "id": "y1",
        "color": "yellow",
        "x": 5,
        "y": 2
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
        "x": 2,
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
    "phases": [
      {
        "label": "First key",
        "intro": "Use the lower switch without trapping the red lane.",
        "par": 11,
        "blocks": [
          {
            "id": "r1",
            "color": "red",
            "x": 2,
            "y": 2
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
            "color": "red",
            "x": 7,
            "y": 2,
            "dir": "right"
          },
          {
            "color": "green",
            "x": 2,
            "y": 7,
            "dir": "down"
          }
        ]
      },
      {
        "label": "Second key",
        "intro": "Now the opposite door controls the clean route.",
        "par": 11,
        "blocks": [
          {
            "id": "b1",
            "color": "blue",
            "x": 5,
            "y": 5
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
            "color": "blue",
            "x": 0,
            "y": 5,
            "dir": "left"
          },
          {
            "color": "yellow",
            "x": 5,
            "y": 0,
            "dir": "up"
          }
        ]
      },
      {
        "label": "Both doors",
        "intro": "All four colors return. Open both lanes and clear the traffic.",
        "par": 20,
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
            "id": "y1",
            "color": "yellow",
            "x": 5,
            "y": 2
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
            "x": 2,
            "y": 7,
            "dir": "down"
          },
          {
            "color": "yellow",
            "x": 5,
            "y": 0,
            "dir": "up"
          }
        ]
      }
    ],
    "id": "two-doors"
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
    "name": "Broken Bridge",
    "cols": 8,
    "rows": 7,
    "par": 8,
    "time": 72,
    "mechanics": [
      "Irregular board",
      "Internal exits"
    ],
    "hint": "The missing strip is an edge. Some exits are inside the board, not around it.",
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
    "id": "broken-bridge"
  },
  {
    "difficulty": "intermediate",
    "name": "Cold Queue",
    "cols": 7,
    "rows": 7,
    "par": 8,
    "time": 68,
    "mechanics": [
      "Ice ❄",
      "Exit order"
    ],
    "hint": "The order is fixed. Use the ice lane without sending the wrong color too far.",
    "exitOrder": [
      "blue",
      "green",
      "red",
      "yellow"
    ],
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
      },
      {
        "x": 5,
        "y": 3
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
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 5
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
        "x": 5,
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
        "color": "green",
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 0,
        "y": 1,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 6,
        "dir": "down"
      }
    ],
    "id": "cold-queue"
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
    "id": "false-start",
    "boss": true,
    "bossTime": 210,
    "phases": [
      {
        "label": "Read the wall",
        "intro": "Start with the obvious route.",
        "par": 2,
        "blocks": [
          {
            "id": "r1",
            "color": "red",
            "x": 1,
            "y": 2
          }
        ],
        "gates": [
          {
            "color": "red",
            "x": 0,
            "y": 2,
            "dir": "left"
          }
        ],
        "exitOrder": [
          "red"
        ]
      },
      {
        "label": "Use the warp",
        "intro": "The next wave changes the useful side of the board.",
        "par": 3,
        "blocks": [
          {
            "id": "p1",
            "color": "purple",
            "x": 2,
            "y": 5
          }
        ],
        "gates": [
          {
            "color": "purple",
            "x": 6,
            "y": 1,
            "dir": "right"
          }
        ],
        "exitOrder": [
          "purple"
        ]
      },
      {
        "label": "Two-way finish",
        "intro": "Two colors arrive together. Clear them in order.",
        "par": 4,
        "blocks": [
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
            "color": "green",
            "x": 0,
            "y": 4,
            "dir": "left"
          }
        ],
        "exitOrder": [
          "blue",
          "green"
        ]
      }
    ],
    "bossPar": 9
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
    "difficulty": "intermediate",
    "name": "Arrow Bend",
    "cols": 7,
    "rows": 7,
    "par": 12,
    "time": 70,
    "mechanics": [
      "One-way →",
      "Traffic"
    ],
    "hint": "Once a block sits on an arrow, your next move is committed.",
    "oneWays": [
      {
        "x": 2,
        "y": 4,
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
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "blue",
        "x": 6,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "green",
        "x": 0,
        "y": 5,
        "dir": "left"
      },
      {
        "color": "yellow",
        "x": 5,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "arrow-bend"
  },
  {
    "difficulty": "intermediate",
    "name": "Cross Current",
    "cols": 7,
    "rows": 7,
    "par": 16,
    "time": 62,
    "mechanics": [
      "Traffic",
      "Corridors"
    ],
    "hint": "The center belongs to everyone. Move one color aside before sending another through.",
    "walls": [
      {
        "x": 3,
        "y": 1
      },
      {
        "x": 3,
        "y": 5
      },
      {
        "x": 1,
        "y": 3
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
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 4
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
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
        "color": "red",
        "x": 6,
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
        "x": 2,
        "y": 6,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 4,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "cross-current"
  },
  {
    "difficulty": "intermediate",
    "name": "Double Warp",
    "cols": 7,
    "rows": 7,
    "par": 16,
    "time": 66,
    "mechanics": [
      "2 portals",
      "Traffic"
    ],
    "hint": "Two portals create shortcuts — and two places you can accidentally block.",
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
        "x": 5,
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
        "x": 5,
        "y": 4
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
    "id": "double-warp"
  },
  {
    "difficulty": "intermediate",
    "name": "Gate Relay",
    "cols": 7,
    "rows": 7,
    "par": 16,
    "time": 64,
    "mechanics": [
      "Switch ◆",
      "Barrier ▥",
      "Traffic"
    ],
    "hint": "One block has to detour through the switch before the direct lane becomes useful.",
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 5
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 4,
        "y": 2
      }
    ],
    "walls": [
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
        "x": 2,
        "y": 2
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 5,
        "y": 4
      },
      {
        "id": "g1",
        "color": "green",
        "x": 1,
        "y": 4
      }
    ],
    "gates": [
      {
        "color": "red",
        "x": 6,
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
      }
    ],
    "id": "gate-relay",
    "boss": true,
    "bossTime": 210,
    "phases": [
      {
        "label": "Open space",
        "intro": "Use the lower lane first.",
        "par": 3,
        "blocks": [
          {
            "id": "g1",
            "color": "green",
            "x": 1,
            "y": 4
          }
        ],
        "gates": [
          {
            "color": "green",
            "x": 1,
            "y": 6,
            "dir": "down"
          }
        ]
      },
      {
        "label": "Relay the switch",
        "intro": "The locked crossing now matters.",
        "par": 7,
        "blocks": [
          {
            "id": "r1",
            "color": "red",
            "x": 2,
            "y": 2
          }
        ],
        "gates": [
          {
            "color": "red",
            "x": 6,
            "y": 2,
            "dir": "right"
          }
        ]
      },
      {
        "label": "Final crossing",
        "intro": "Finish through the longest lane without resetting the clock.",
        "par": 8,
        "blocks": [
          {
            "id": "b1",
            "color": "blue",
            "x": 5,
            "y": 4
          }
        ],
        "gates": [
          {
            "color": "blue",
            "x": 0,
            "y": 4,
            "dir": "left"
          }
        ]
      }
    ],
    "bossPar": 18
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
    "name": "Frozen Lock",
    "cols": 9,
    "rows": 9,
    "par": 16,
    "time": 114,
    "mechanics": [
      "Ice ❄",
      "Switch ◆",
      "Barrier ▥",
      "Exit order"
    ],
    "hint": "The ice can open the lock, but the required exit order means timing matters.",
    "exitOrder": [
      "green",
      "blue",
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
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 6
      },
      {
        "id": "r1",
        "color": "red",
        "x": 5,
        "y": 2
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 2,
        "y": 6
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 8,
        "y": 4,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 6,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 8,
        "y": 2,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 2,
        "y": 8,
        "dir": "down"
      }
    ],
    "id": "frozen-lock"
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
    "id": "arrow-circuit",
    "boss": true,
    "bossTime": 300,
    "phases": [
      {
        "label": "Commit north",
        "intro": "The first arrow removes your escape route.",
        "par": 6,
        "blocks": [
          {
            "id": "r1",
            "color": "red",
            "x": 2,
            "y": 5
          }
        ],
        "gates": [
          {
            "color": "red",
            "x": 2,
            "y": 0,
            "dir": "up"
          }
        ]
      },
      {
        "label": "Commit west",
        "intro": "A second one-way lane flips the problem.",
        "par": 6,
        "blocks": [
          {
            "id": "b1",
            "color": "blue",
            "x": 5,
            "y": 2
          }
        ],
        "gates": [
          {
            "color": "blue",
            "x": 0,
            "y": 2,
            "dir": "left"
          }
        ]
      },
      {
        "label": "Split finish",
        "intro": "Two final blocks share the remaining space.",
        "par": 6,
        "blocks": [
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
        ]
      }
    ],
    "bossPar": 18
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
    "name": "Portal Freight",
    "cols": 9,
    "rows": 9,
    "par": 22,
    "time": 112,
    "mechanics": [
      "Portal ◎",
      "Long blocks",
      "Traffic"
    ],
    "hint": "The portal moves only the small pieces. Use them to clear lanes for the freight blocks.",
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 2,
          "y": 7
        },
        "b": {
          "x": 7,
          "y": 2
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
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 6,
        "y": 6,
        "w": 2,
        "h": 1
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
        "x": 2,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "purple",
        "x": 6,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "portal-freight"
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
    "difficulty": "hard",
    "name": "Switch Maze",
    "cols": 9,
    "rows": 9,
    "par": 24,
    "time": 110,
    "mechanics": [
      "2 switches",
      "2 barriers",
      "Traffic"
    ],
    "hint": "Each door opens from the other side. Plan where every color parks before crossing.",
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
        "id": "y1",
        "color": "yellow",
        "x": 6,
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
        "y": 6,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 2,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "yellow",
        "x": 6,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "switch-maze"
  },
  {
    "difficulty": "hard",
    "name": "Three Keys",
    "cols": 10,
    "rows": 9,
    "par": 26,
    "time": 120,
    "mechanics": [
      "3 switches",
      "3 barriers"
    ],
    "hint": "Three keys control three lanes. Opening them in the wrong order creates its own blockade.",
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
      },
      {
        "id": "C",
        "x": 2,
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
      },
      {
        "id": "C",
        "x": 5,
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
        "color": "red",
        "x": 9,
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
        "x": 2,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "purple",
        "x": 7,
        "y": 0,
        "dir": "up"
      }
    ],
    "id": "three-keys"
  },
  {
    "difficulty": "hard",
    "name": "One-Way Relay",
    "cols": 9,
    "rows": 9,
    "par": 28,
    "time": 120,
    "mechanics": [
      "One-way →",
      "Exit order",
      "Traffic"
    ],
    "hint": "The arrows lock your next move. Stage the board before touching them.",
    "exitOrder": [
      "blue",
      "green",
      "yellow",
      "red"
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
      },
      {
        "x": 6,
        "y": 6,
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
        "y": 2
      },
      {
        "id": "g1",
        "color": "green",
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
        "x": 6,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "red",
        "x": 8,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "one-way-relay"
  },
  {
    "difficulty": "hard",
    "name": "Long Detour",
    "cols": 10,
    "rows": 9,
    "par": 34,
    "time": 122,
    "mechanics": [
      "Long blocks",
      "Corridors",
      "Exit order"
    ],
    "hint": "Freight pieces must take the long way around the center walls. Keep the turning bays open.",
    "exitOrder": [
      "purple",
      "green",
      "blue",
      "red"
    ],
    "walls": [
      {
        "x": 4,
        "y": 2
      },
      {
        "x": 5,
        "y": 2
      },
      {
        "x": 4,
        "y": 6
      },
      {
        "x": 5,
        "y": 6
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
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 7,
        "y": 6,
        "w": 2,
        "h": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 6,
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
      }
    ],
    "gates": [
      {
        "color": "purple",
        "x": 7,
        "y": 8,
        "dir": "down"
      },
      {
        "color": "green",
        "x": 2,
        "y": 0,
        "dir": "up"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 6,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 9,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "long-detour"
  },
  {
    "difficulty": "hard",
    "name": "Crossed Orders",
    "cols": 9,
    "rows": 9,
    "par": 40,
    "time": 116,
    "mechanics": [
      "Exit order",
      "Traffic",
      "Corridors"
    ],
    "hint": "The exit order sends colors across one another. Save the center for the piece that needs it next.",
    "exitOrder": [
      "yellow",
      "blue",
      "green",
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
        "color": "yellow",
        "x": 0,
        "y": 6,
        "dir": "left"
      },
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
      }
    ],
    "id": "crossed-orders",
    "boss": true,
    "bossTime": 300,
    "phases": [
      {
        "label": "Eastbound",
        "intro": "One long crossing opens the boss.",
        "par": 10,
        "blocks": [
          {
            "id": "r1",
            "color": "red",
            "x": 1,
            "y": 2
          }
        ],
        "gates": [
          {
            "color": "red",
            "x": 8,
            "y": 2,
            "dir": "right"
          }
        ],
        "exitOrder": [
          "red"
        ]
      },
      {
        "label": "Westbound",
        "intro": "Now solve the opposite direction.",
        "par": 10,
        "blocks": [
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
            "x": 0,
            "y": 6,
            "dir": "left"
          }
        ],
        "exitOrder": [
          "yellow"
        ]
      },
      {
        "label": "Cross traffic",
        "intro": "Two colors must cross the center in sequence.",
        "par": 20,
        "blocks": [
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
          }
        ],
        "exitOrder": [
          "blue",
          "green"
        ]
      }
    ],
    "bossPar": 40
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
    "name": "Vault Circuit",
    "cols": 10,
    "rows": 10,
    "par": 30,
    "time": 166,
    "mechanics": [
      "2 switches",
      "2 barriers",
      "Exit order",
      "Traffic"
    ],
    "hint": "Both vault doors open from opposite sides. The exit order forces you to reuse the center twice.",
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
        "y": 8
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
        "y": 7
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
        "y": 6
      },
      {
        "x": 5,
        "y": 8
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
        "y": 7
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 7
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
        "y": 7,
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
    "id": "vault-circuit"
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
    "id": "four-corners",
    "boss": true,
    "bossTime": 480,
    "phases": [
      {
        "label": "First crossing",
        "intro": "One corner must reach the far side.",
        "par": 8,
        "blocks": [
          {
            "id": "g1",
            "color": "green",
            "x": 1,
            "y": 7
          }
        ],
        "gates": [
          {
            "color": "green",
            "x": 8,
            "y": 7,
            "dir": "right"
          }
        ]
      },
      {
        "label": "Second crossing",
        "intro": "The opposite corner takes its turn.",
        "par": 8,
        "blocks": [
          {
            "id": "y1",
            "color": "yellow",
            "x": 7,
            "y": 7
          }
        ],
        "gates": [
          {
            "color": "yellow",
            "x": 0,
            "y": 7,
            "dir": "left"
          }
        ]
      },
      {
        "label": "Double crossing",
        "intro": "The final two compete for the same center.",
        "par": 18,
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
          }
        ]
      }
    ],
    "bossPar": 34
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
    "name": "Portal Prison",
    "cols": 10,
    "rows": 10,
    "par": 40,
    "time": 170,
    "mechanics": [
      "2 portals",
      "Corridors",
      "Exit order"
    ],
    "hint": "The walls split the board into prison lanes. Portals are the only fast transfer between them.",
    "exitOrder": [
      "yellow",
      "green",
      "blue",
      "red"
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 2,
          "y": 8
        },
        "b": {
          "x": 8,
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
          "y": 8
        }
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
        "y": 4
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
        "y": 6
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
        "x": 8,
        "y": 2
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
        "x": 8,
        "y": 7
      }
    ],
    "gates": [
      {
        "color": "yellow",
        "x": 0,
        "y": 7,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 9,
        "y": 7,
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
    "id": "portal-prison"
  },
  {
    "difficulty": "extreme",
    "name": "Frozen Exchange",
    "cols": 10,
    "rows": 10,
    "par": 41,
    "time": 174,
    "mechanics": [
      "Ice ❄",
      "Exit order",
      "Traffic"
    ],
    "hint": "Two ice lanes cross the traffic pattern. Commit to a slide only when its landing zone is ready.",
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
        "y": 5
      },
      {
        "x": 7,
        "y": 5
      },
      {
        "x": 8,
        "y": 5
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
        "y": 6
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
        "y": 7
      },
      {
        "id": "y1",
        "color": "yellow",
        "x": 8,
        "y": 7
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
        "x": 9,
        "y": 7,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 0,
        "y": 7,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 9,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "frozen-exchange"
  },
  {
    "difficulty": "extreme",
    "name": "Final Relay",
    "cols": 11,
    "rows": 10,
    "par": 44,
    "time": 196,
    "mechanics": [
      "Portal ◎",
      "2 switches",
      "2 barriers",
      "Exit order",
      "Long blocks"
    ],
    "hint": "Everything you learned is here. Open both lanes, preserve the portal, then clear the freight in sequence.",
    "exitOrder": [
      "green",
      "purple",
      "blue",
      "red"
    ],
    "portals": [
      {
        "id": "A",
        "a": {
          "x": 3,
          "y": 8
        },
        "b": {
          "x": 8,
          "y": 1
        }
      }
    ],
    "switches": [
      {
        "id": "A",
        "x": 2,
        "y": 8
      },
      {
        "id": "B",
        "x": 9,
        "y": 1
      }
    ],
    "barriers": [
      {
        "id": "A",
        "x": 7,
        "y": 2
      },
      {
        "id": "B",
        "x": 4,
        "y": 7
      }
    ],
    "walls": [
      {
        "x": 5,
        "y": 2
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
        "y": 6
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
        "x": 1,
        "y": 2,
        "w": 2,
        "h": 1
      },
      {
        "id": "b1",
        "color": "blue",
        "x": 8,
        "y": 7,
        "w": 2,
        "h": 1
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 7
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 8,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "green",
        "x": 10,
        "y": 7,
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
        "x": 0,
        "y": 7,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 10,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "final-relay"
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
  },
  {
    "difficulty": "extreme",
    "name": "Five Locks",
    "cols": 10,
    "rows": 10,
    "par": 49,
    "time": 186,
    "mechanics": [
      "3 switches",
      "3 barriers",
      "5 blocks",
      "Exit order"
    ],
    "hint": "Three locks and five colors share the same crossing. Every parking move matters.",
    "exitOrder": [
      "purple",
      "green",
      "yellow",
      "blue",
      "red"
    ],
    "switches": [
      {
        "id": "A",
        "x": 1,
        "y": 8
      },
      {
        "id": "B",
        "x": 8,
        "y": 1
      },
      {
        "id": "C",
        "x": 2,
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
        "y": 7
      },
      {
        "id": "C",
        "x": 5,
        "y": 5
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
        "x": 7,
        "y": 7
      },
      {
        "id": "g1",
        "color": "green",
        "x": 2,
        "y": 7
      },
      {
        "id": "p1",
        "color": "purple",
        "x": 7,
        "y": 2
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
        "color": "purple",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 9,
        "y": 7,
        "dir": "right"
      },
      {
        "color": "yellow",
        "x": 0,
        "y": 6,
        "dir": "left"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 7,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 9,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "five-locks"
  },
  {
    "difficulty": "extreme",
    "name": "Spiral Order",
    "cols": 10,
    "rows": 10,
    "par": 52,
    "time": 184,
    "mechanics": [
      "Corridors",
      "Exit order",
      "Traffic"
    ],
    "hint": "Trace the spiral before moving. The required order sends multiple colors through the same turning bays.",
    "exitOrder": [
      "yellow",
      "green",
      "blue",
      "red"
    ],
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
        "x": 7,
        "y": 1
      },
      {
        "x": 7,
        "y": 2
      },
      {
        "x": 7,
        "y": 3
      },
      {
        "x": 7,
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
        "x": 5,
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
        "x": 2,
        "y": 7
      },
      {
        "x": 3,
        "y": 8
      },
      {
        "x": 4,
        "y": 8
      },
      {
        "x": 5,
        "y": 8
      },
      {
        "x": 6,
        "y": 8
      },
      {
        "x": 7,
        "y": 8
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
        "y": 7
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
        "x": 8,
        "y": 2
      }
    ],
    "gates": [
      {
        "color": "yellow",
        "x": 0,
        "y": 2,
        "dir": "left"
      },
      {
        "color": "green",
        "x": 9,
        "y": 7,
        "dir": "right"
      },
      {
        "color": "blue",
        "x": 0,
        "y": 7,
        "dir": "left"
      },
      {
        "color": "red",
        "x": 9,
        "y": 2,
        "dir": "right"
      }
    ],
    "id": "spiral-order",
    "boss": true,
    "bossTime": 480,
    "phases": [
      {
        "label": "Enter the spiral",
        "intro": "Trace the corridor before you move.",
        "par": 13,
        "blocks": [
          {
            "id": "b1",
            "color": "blue",
            "x": 8,
            "y": 7
          }
        ],
        "gates": [
          {
            "color": "blue",
            "x": 0,
            "y": 7,
            "dir": "left"
          }
        ],
        "exitOrder": [
          "blue"
        ]
      },
      {
        "label": "Reverse the flow",
        "intro": "The second wave uses the same maze in reverse.",
        "par": 13,
        "blocks": [
          {
            "id": "g1",
            "color": "green",
            "x": 1,
            "y": 7
          }
        ],
        "gates": [
          {
            "color": "green",
            "x": 9,
            "y": 7,
            "dir": "right"
          }
        ],
        "exitOrder": [
          "green"
        ]
      },
      {
        "label": "Spiral finale",
        "intro": "Two colors share the full spiral under one clock.",
        "par": 26,
        "blocks": [
          {
            "id": "r1",
            "color": "red",
            "x": 1,
            "y": 2
          },
          {
            "id": "y1",
            "color": "yellow",
            "x": 8,
            "y": 2
          }
        ],
        "gates": [
          {
            "color": "yellow",
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
        "exitOrder": [
          "yellow",
          "red"
        ]
      }
    ],
    "bossPar": 52
  }
];

const DIFFICULTIES=["easy","intermediate","hard","extreme"];
const DIFFICULTY_LABELS={easy:"Easy",intermediate:"Intermediate",hard:"Hard",extreme:"Extreme ☠️"};
const savedDifficulty=localStorage.getItem("bf-difficulty");
const ACTIVE_DIFFICULTY=DIFFICULTIES.includes(savedDifficulty)?savedDifficulty:"easy";
let LEVELS=ALL_LEVELS.filter(item=>item.difficulty===ACTIVE_DIFFICULTY);
