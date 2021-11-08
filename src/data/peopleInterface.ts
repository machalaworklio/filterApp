interface Person {
  id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: number;
  picture: string;
  age: number;
  eyeColor: 'blue' | 'brown' | 'green';
  name: string;
  gender: 'male' | 'female';
  company: string;
  email: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  tags: string[];
  friends: Friend[];
  favoriteFruit: string;
}

interface Friend {
  id: number;
  name: string;
}
