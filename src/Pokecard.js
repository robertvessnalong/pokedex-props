const Pokecard = ({ id, name, type, exp }) => {
  return (
    <div className='Pokemon'>
      <div className='Pokemon-name'>{name}</div>
      <div className='Pokemon-img'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt=''
        />
      </div>
      <div className='Pokemon-type'>Type: {type}</div>
      <div className='Pokemon-exp'>EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
