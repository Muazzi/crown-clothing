import { Outlet } from 'react-router-dom';
import './category-item.component.styles.scss';

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    return (
        <div
        className="category-container"
        >
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
         <div className="category-image-container"></div>
        
        <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
        </div>
        <div>
        <Outlet/>
        </div>
       </div>
    );
}
export default CategoryItem;