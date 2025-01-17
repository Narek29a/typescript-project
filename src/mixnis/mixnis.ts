// To get started, we need a type which we'll use to extend
// other classes from. The main responsibility is to declare
// that the type being passed in is a class.
class Sprite {
    name = "";
    x = 0;
    y = 0;

    constructor(name: string) {
        this.name = name;
    }
}

type Constructor = new (...args: any[]) => {};

// This mixin adds a scale property, with getters and setters
// for changing it with an encapsulated private property:

function Scale<TBase extends Sprite>(Base: TBase) {
    return class Scaling extends Base {
        constructor(name: string) {
            super();
        }
        // Mixins may not declare private/protected properties
        // however, you can use ES2020 private fields
        _scale = 1;

        setScale(scale: number) {
            this._scale = scale;
        }

        get scale(): number {
            return this._scale;
        }
    };
}

const EightBitSprite = Scale(Sprite);

const flappySprite = new EightBitSprite("Bird");
flappySprite.setScale(0.8);
console.log(flappySprite.scale);
