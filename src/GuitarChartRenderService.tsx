import { GuitarChart } from "./types/GuitarChart";

const IMAGE_WIDTH = 70;
const IMAGE_HEIGHT = 80;

const TITLE_OFFSET_FROM_LEFT = 35;
const TITLE_OFFSET_FROM_TOP = 14;
const TEXT_FONT = "Arial";
const TITLE_FONT_SIZE = 14;

const POSITION_OFFSET_FROM_LEFT = 6;
const POSITION_OFFSET_FROM_TOP = 28;
const POSITION_FONT_SIZE = 8;
const LEFT_OFFSET_FROM_TOP = 38;

const FINGERING_OFFSET_FROM_LEFT = 13;
const FINGERING_OFFSET_FROM_TOP = 24;
const FINGERING_FONT_SIZE = 7;
const FINGERING_SPACING = 8;

const CIRCLE_OFFSET_FROM_LEFT = 15;
const CIRCLE_OFFSET_FROM_TOP = 30;
const CIRCLE_SPACING = 8;
const CIRCLE_RADIUS = 2;

const GRID_OFFSET_FROM_LEFT = 15;
const GRID_OFFSET_FROM_TOP = 26;
const GRID_SPACING = 8;

export class GuitarChartRenderService {
  private constructor() {}

  static getCanvas(canvas?: HTMLCanvasElement, chart?: GuitarChart) {
    if (canvas == undefined) {
      canvas = document.createElement("canvas");
    }
    const context = canvas.getContext("2d");
    canvas.width = IMAGE_WIDTH;
    canvas.height = IMAGE_HEIGHT;

    if (chart && context != null) {
      this.addBackground(context);
      this.addTitle(context, chart.name);
      this.addChordPosition(context, chart.position);

      if (chart.isLeftHanded) {
        this.addChordLeftHand(context);
      }
      this.addChordGrid(context);
      this.addChordFingering(context, chart.fingering);
      this.addChordCircles(context, chart.frets);
    }
    return canvas;
  }

  /**
   * Create a white background.
   */
  private static addBackground(context: CanvasRenderingContext2D) {
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
  }

  /**
   * Add the chord title to the grid.
   */
  private static addTitle(
    context: CanvasRenderingContext2D,
    chordName: string
  ) {
    this.drawText(context, chordName, {
      offsetFromLeft: TITLE_OFFSET_FROM_LEFT,
      offsetFromTop: TITLE_OFFSET_FROM_TOP,
      fontFamily: TEXT_FONT,
      fontSize: TITLE_FONT_SIZE
    });
  }

  /**
   * Add the chord position to the grid.
   */
  private static addChordPosition(
    context: CanvasRenderingContext2D,
    chordPosition: number
  ) {
    this.drawText(context, chordPosition.toString(), {
      offsetFromLeft: POSITION_OFFSET_FROM_LEFT,
      offsetFromTop: POSITION_OFFSET_FROM_TOP,
      fontFamily: TEXT_FONT,
      fontSize: POSITION_FONT_SIZE
    });
  }

  /**
   * Add the left hand 'L' to the grid.
   */
  private static addChordLeftHand(context: CanvasRenderingContext2D) {
    this.drawText(context, "L", {
      offsetFromLeft: POSITION_OFFSET_FROM_LEFT,
      offsetFromTop: LEFT_OFFSET_FROM_TOP,
      fontFamily: TEXT_FONT,
      fontSize: POSITION_FONT_SIZE
    });
  }

  /**
   * Add all the chord fingering to the grid.
   */
  private static addChordFingering(
    context: CanvasRenderingContext2D,
    chordFingering: string
  ) {
    var offset = FINGERING_OFFSET_FROM_LEFT;

    for (var i = 0; i < chordFingering.length; i++) {
      var character = chordFingering.charAt(i);
      if (character != " ") {
        this.drawText(context, character, {
          offsetFromLeft: offset,
          offsetFromTop: FINGERING_OFFSET_FROM_TOP,
          fontFamily: TEXT_FONT,
          fontSize: FINGERING_FONT_SIZE
        });
      }
      offset = offset + FINGERING_SPACING;
    }
  }

  /**
   * Add all the fret circles to the grid.
   */
  private static addChordCircles(
    context: CanvasRenderingContext2D,
    chordFrets: string
  ) {
    for (var i = 0; i < chordFrets.length; i++) {
      var fret = chordFrets.charAt(i);
      if (fret != " ") {
        var leftOffset = CIRCLE_OFFSET_FROM_LEFT + i * CIRCLE_SPACING;
        var topOffset =
          CIRCLE_OFFSET_FROM_TOP + (parseInt(fret) - 1) * CIRCLE_SPACING;
        this.drawCircle(context, {
          offsetFromLeft: leftOffset,
          offsetFromTop: topOffset,
          radius: CIRCLE_RADIUS
        });
      }
    }
  }

  /**
   * Add the actual gridlines to the chart.
   */
  private static addChordGrid(context: CanvasRenderingContext2D) {
    var xPosition1 = GRID_OFFSET_FROM_LEFT;
    var yPosition1;
    var xPosition2 = GRID_OFFSET_FROM_LEFT + GRID_SPACING * 5;
    var yPosition2;

    // Add horizontal lines.
    for (var i = 0; i < 6; i++) {
      yPosition1 = GRID_OFFSET_FROM_TOP + i * GRID_SPACING;
      yPosition2 = yPosition1;

      this.drawLine(context, {
        x1: xPosition1,
        y1: yPosition1,
        x2: xPosition2,
        y2: yPosition2,
        strokeWidth: i == 0 ? "2" : "1"
        // First line is special.
      });
    }

    yPosition1 = GRID_OFFSET_FROM_TOP;
    yPosition2 = GRID_OFFSET_FROM_TOP + GRID_SPACING * 5;

    // Add vertical lines.
    for (var i = 0; i < 6; i++) {
      xPosition1 = GRID_OFFSET_FROM_LEFT + i * GRID_SPACING;
      xPosition2 = xPosition1;

      this.drawLine(context, {
        x1: xPosition1,
        y1: yPosition1,
        x2: xPosition2,
        y2: yPosition2,
        strokeWidth: "1"
      });
    }
  }

  /**
   * Draw a line on the canvas context.
   */
  private static drawLine(context: CanvasRenderingContext2D, params: any) {
    if (params.strokeWidth == "") {
      params.strokeWidth = "1";
    }
    context.strokeStyle = "#000000";
    context.lineWidth = params.strokeWidth;
    context.lineCap = "square";
    context.beginPath();
    context.moveTo(params.x1, params.y1);
    context.lineTo(params.x2, params.y2);
    context.stroke();
    context.closePath();
  }

  /**
   * Draw text on the canvas object.
   */
  private static drawText(
    context: CanvasRenderingContext2D,
    value: string,
    params: any
  ) {
    context.font = params.fontSize + "px " + params.fontFamily;
    context.textAlign = "center";
    context.strokeText(value, params.offsetFromLeft, params.offsetFromTop);
  }

  /**
   * Draw a circle on the canvas object.
   */
  private static drawCircle(context: CanvasRenderingContext2D, params: any) {
    context.beginPath();
    context.fillStyle = "#000000";
    context.arc(
      params.offsetFromLeft,
      params.offsetFromTop,
      params.radius,
      0,
      2 * Math.PI
    );
    context.fill();
    context.closePath();
  }
}
