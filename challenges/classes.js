// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMake{
    constructor(attributes){
      this.length=attributes.length,
      this.width=attributes.width,
      this.height=attributes.height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    }
};

const cuboi=new CuboidMake({
  length:4,
  width:5,
  height:5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130




// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMake {
    constructor(cubes)  {
      super(cubes);
      this.number = cubes.number;
    }
    cubeVolume() {
      return (this.number)* 1000
    }
    cubeArea() {
      return (this.number)/7
    }
  }
  
  const riseOfCube = new CubeMaker({
    number: 5
  })
  
  console.log(riseOfCube.number);
  console.log(riseOfCube.cubeVolume());
  console.log(riseOfCube.cubeArea());
