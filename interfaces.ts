interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: '123',
  size: {
    width: 50,
    height: 50,
  },
  color: '#fff',
};

const rect2: Rect = {
  id: '12345',
  size: {
    width: 10,
    height: 10,
  },
};

rect2.color = 'black';
// rect2.id = '3313'

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ========================= Наследование

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: '12',
  size: {
    width: 15,
    height: 15,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

// ========================= Кдассы

interface IClock {
  time: Date;
  setTime(data: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// ========================= Динамический интерфейсы

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
};
