interface AvatarProps {
  person: {
    name: string;
    age: number;
  };
  size: number | string;
}

const Avatar = ({ person, size }: AvatarProps) => {
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{size}</h1>
    </div>
  );
};

export default Avatar;
