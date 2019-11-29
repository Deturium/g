const expect = require('chai').expect;
import Canvas from '../../src/canvas';
import Group from '../../src/group';

const dom = document.createElement('div');
document.body.appendChild(dom);
dom.id = 'c1';

describe('#276', () => {
  const canvas = new Canvas({
    container: dom,
    width: 600,
    height: 600,
  });

  it('group.addShape should work when group dom is not created', () => {
    const group = new Group({});
    group.addShape('marker', {
      attrs: {
        x: 100,
        y: 100,
        r: 30,
        fill: 'red',
        symbol: 'circle',
      },
    });
    expect(canvas.getChildren().length).eqls(0);
    canvas.add(group);
    expect(canvas.getChildren().length).eqls(1);
  });
});
