import Matter, { World } from "matter-js";
import "./styles.css";

// Canvas setup
var canvas = document.getElementById("world");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function percentX(percent) {
  return Math.round((percent / 100) * canvas.width);
}
function percentY(percent) {
  return Math.round((percent / 100) * canvas.height);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//

var Engine = Matter.Engine;
var Render = Matter.Render;
var Bodies = Matter.Bodies;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;
var Runner = Matter.Runner;
var Composites = Matter.Composites;

// Setup Engine, Runner, World and Render
var engine = Engine.create();
var world = engine.world;
var runner = Runner.create();
var render = Render.create({
  element: canvas,
  engine: engine,
  options: {
    wireframes: false,
    // showBounds: true,
    // hasBounds: true,
    width: percentX(100),
    height: percentY(100),
    background: "#FFFFFF"
  }
});

Runner.run(runner, engine);
Render.run(render);
//

// Mouse event
onmousemove = function (e) {
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let xValue = e.x;
  let yValue = e.y;

  let mousePosX = -2 + (xValue / windowWidth) * 4;
  let mousePosY = -2 + (yValue / windowHeight) * 4;

  // Gravity
  engine.world.gravity.x = mousePosX;
  engine.world.gravity.y = mousePosY;
};

var redefining = [
  "",
  "../assets/R.png",
  "../assets/e.png",
  "../assets/d.png",
  "../assets/e.png",
  "../assets/f.png",
  "../assets/i.png",
  "../assets/n.png",
  "../assets/i.png",
  "../assets/n.png",
  "../assets/g.png"
];

var behaviours = [
  "",
  "../assets/b.png",
  "../assets/e.png",
  "../assets/h.png",
  "../assets/a.png",
  "../assets/v.png",
  "../assets/i.png",
  "../assets/o.png",
  "../assets/u.png",
  "../assets/rlower.png",
  "../assets/s.png"
];

var withh = [
  "",
  "../assets/w.png",
  "../assets/i.png",
  "../assets/t.png",
  "../assets/h.png"
];

var design = [
  "",
  "../assets/d.png",
  "../assets/e.png",
  "../assets/s.png",
  "../assets/i.png",
  "../assets/g.png",
  "../assets/n.png"
];

var technology = [
  "",
  "../assets/t.png",
  "../assets/e.png",
  "../assets/c.png",
  "../assets/h.png",
  "../assets/n.png",
  "../assets/o.png",
  "../assets/l.png",
  "../assets/o.png",
  "../assets/g.png",
  "../assets/y.png"
];

var rIndex = 0;
var bIndex = 0;
var wIndex = 0;
var dIndex = 0;
var tIndex = 0;

var assetSize = percentX(5);
var kerning = 0.6;
var ratioSprite = 0.5;

var redefiningWord = Composites.stack(
  percentX(25) - assetSize / 2,
  percentY(25),
  1,
  10,
  5,
  5,
  function (x, y) {
    rIndex++;
    return Bodies.rectangle(percentX(50), percentY(10), assetSize, assetSize, {
      // collisionFilter: { group: group },
      // friction: 1,
      render: {
        sprite: {
          texture: redefining[rIndex],
          xScale: (assetSize / 100) * ratioSprite,
          yScale: (assetSize / 100) * ratioSprite
        }
      }
    });
  }
);
Composites.chain(redefiningWord, kerning, 0, -kerning, 0, {
  // stiffness: 1,
  length: 5,
  render: { type: "line", visible: false }
});

var behavioursWord = Composites.stack(
  percentX(25) - assetSize / 2,
  percentY(25),
  1,
  10,
  5,
  5,
  function (x, y) {
    bIndex++;
    return Bodies.rectangle(percentX(30), percentY(20), assetSize, assetSize, {
      // collisionFilter: { group: group },
      // friction: 1,
      render: {
        sprite: {
          texture: behaviours[bIndex],
          xScale: (assetSize / 100) * ratioSprite,
          yScale: (assetSize / 100) * ratioSprite
        }
      }
    });
  }
);
Composites.chain(behavioursWord, kerning, 0, -kerning, 0, {
  // stiffness: 1,
  length: 5,
  render: { type: "line", visible: false }
});

var withWord = Composites.stack(
  percentX(25) - assetSize / 2,
  percentY(25),
  1,
  4,
  5,
  5,
  function (x, y) {
    wIndex++;

    return Bodies.rectangle(percentX(30), percentY(30), assetSize, assetSize, {
      // collisionFilter: { group: group },
      // friction: 1,
      render: {
        sprite: {
          texture: withh[wIndex],
          xScale: (assetSize / 100) * ratioSprite,
          yScale: (assetSize / 100) * ratioSprite
        }
      }
    });
  }
);
Composites.chain(withWord, kerning, 0, -kerning, 0, {
  stiffness: 1,
  length: 5,
  render: { type: "line", visible: false }
});

var designWord = Composites.stack(
  percentX(25) - assetSize / 2,
  percentY(25),
  1,
  6,
  5,
  5,
  function (x, y) {
    dIndex++;
    return Bodies.rectangle(percentX(40), percentY(50), assetSize, assetSize, {
      // collisionFilter: { group: group },
      // friction: 1,
      render: {
        sprite: {
          texture: design[dIndex],
          xScale: (assetSize / 100) * ratioSprite,
          yScale: (assetSize / 100) * ratioSprite
        }
      }
    });
  }
);
Composites.chain(designWord, kerning, 0, -kerning, 0, {
  // stiffness: 1,
  length: design.length,
  render: { type: "line", visible: false }
});

var ampersand = Bodies.rectangle(
  percentX(40),
  percentY(40),
  assetSize,
  assetSize,
  {
    friction: 1,
    render: {
      sprite: {
        texture: "../assets/&.png",
        xScale: (assetSize / 100) * ratioSprite,
        yScale: (assetSize / 100) * ratioSprite
      }
    }
  }
);

var technologyWord = Composites.stack(
  percentX(25) - assetSize / 2,
  percentY(25),
  1,
  10,
  5,
  5,
  function (x, y) {
    tIndex++;
    return Bodies.rectangle(percentX(50), percentY(50), assetSize, assetSize, {
      // collisionFilter: { group: group },
      friction: 1,
      render: {
        sprite: {
          texture: technology[tIndex],
          xScale: (assetSize / 100) * ratioSprite,
          yScale: (assetSize / 100) * ratioSprite
        }
      }
    });
  }
);
Composites.chain(technologyWord, kerning, 0, -kerning, 0, {
  stiffness: 1,
  length: 5,
  render: { type: "line", visible: false }
});

var boundOffset = 18;

var wallThick = 80;
var wallOptions = {
  isStatic: true,
  render: {
    fillStyle: "white"
  }
};

World.add(world, [
  //Walls
  Bodies.rectangle(
    0,
    -boundOffset,
    percentX(canvas.width),
    wallThick,
    wallOptions
  ),
  Bodies.rectangle(
    -boundOffset,
    0,
    wallThick,
    percentX(canvas.height),
    wallOptions
  ),
  Bodies.rectangle(
    0,
    percentY(100) + boundOffset,
    percentX(canvas.width),
    wallThick,
    wallOptions
  ),
  Bodies.rectangle(
    percentX(100) + boundOffset,
    percentY(100),
    wallThick,
    percentX(canvas.height),
    wallOptions
  ),
  redefiningWord,
  behavioursWord,
  withWord,
  designWord,
  ampersand,
  technologyWord
]);

// Bodies
// var mouseBody = Matter.Bodies.circle(0, 0, 100);
// World.add(world, [mouseBody]);

var stickerSize = percentY(10);
var stickerRatio = 0.53;
var stickerArray = [
  "../assets/st.png",
  "../assets/sticker-a/sticker-0.png",
  "../assets/sticker-a/sticker-1.png",
  "../assets/sticker-a/sticker-2.png",
  "../assets/sticker-a/sticker-3.png",
  "../assets/sticker-a/sticker-4.png"
];
var iSticker = 0;

// Add Stickers
var stickerOptions = {
  frictionAir: 0,
  friction: 1,
  restitution: 0.8,
  rotate: 10
};

var addSticker = function () {
  stickerSize = getRandomArbitrary(percentY(10), percentY(20));
  iSticker++;

  if (iSticker > stickerArray.length - 1) {
    iSticker = 0;
  }
  return Bodies.circle(
    mouse.position.x,
    mouse.position.y,
    // Math.random() * 50 + 5,
    stickerSize,
    {
      stickerOptions,
      render: {
        sprite: {
          texture: stickerArray[iSticker],
          xScale: (stickerSize / 100) * stickerRatio,
          yScale: (stickerSize / 100) * stickerRatio
        }
      }
    }
  );
};

canvas.addEventListener("click", (event) => {
  World.add(engine.world, addSticker());
});

canvas.addEventListener("touchstart", (event) => {
  World.add(engine.world, addSticker());
});
// Add ends

// Add mouse constraint
var mouseBody = Matter.Bodies.circle(0, 0, 150, {
  render: { fillStyle: "transparent" }
});
World.add(world, mouseBody);

var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 1,
    render: {
      visible: true
    }
  }
});
World.add(world, mouseConstraint);

var con = Matter.Constraint.create({
  pointA: mouse.position,
  bodyB: (mouseConstraint.body = mouseBody),
  stiffness: 0.1,
  damping: 1,
  render: {
    visible: false
  }
});
Matter.World.add(world, con);

// Update resize
var resizeTimeout;
window.addEventListener("resize", function (event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    window.location.reload();
  }, 500);
});

render.mouse = mouse;
