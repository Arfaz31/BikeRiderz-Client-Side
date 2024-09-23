export type TBike = {
  _id?: string;
  name: string;
  image: string[];
  description: string;
  pricePerHour: number;
  isAvailable: boolean;
  cc: number;
  mileage: number;
  topSpeed: number;
  power: number;
  tyreType: string;
  year: number;
  model: string;
  brand: string;
  madeIn: string;
  engineType: string;
  fuelSupply: string;
  engineCooling: string;
  noOfCylinders: number;
  startingMethod: string;
  fuelTankCapacity: number;
  brakeType: string;
  abs: string;
  batteryType: string;
  batteryVoltage: string;
  headLamp: string;
  indicator: string;
};

export type Tuser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};
