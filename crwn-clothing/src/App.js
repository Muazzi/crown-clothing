
const  App=()=> {
  const categories = [
    { id :1, title: 'Hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl: 'hats' },
    { id :1, title: 'Jackets', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl: 'hats' },
    { id :1, title: 'Sneakers', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl: 'hats' },
    { id :1, title: 'Womens', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl: 'hats' },
    { id :1, title: 'Hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', linkUrl: 'hats' },

  ]
  return (
    <div
    className="categories-container"
    >
    {categories.map((category)=>(
    <div
    className="category-container"
    >
     <div className="category-image-container"></div>
    { <img src ={category.imageUrl}/> }
    <div className="category-body-container">
    <h2>{category.title}</h2>
    <p>Shop now</p>
    </div>
   </div>
    ))}
    </div>

  );
    

}

export default App;
