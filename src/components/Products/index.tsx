import styles from '@/styles/components/Products.module.scss';
import { useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../Button';
import Image from 'next/image';

interface ProductsProps {
  image: string;
  price: string;
  name: string;
  type: string;
}


const filters = [
  { id: 0, title: 'New Delicacies', stock: '3', label: 'delicacies' },
  { id: 1, title: 'Hot Coffee', stock: '4', label: 'coffee' },
  { id: 2, title: 'Cakes and Delicacies', stock: '4', label: 'cakes' },
];

const productsArr = [
  { image: 'delicacies1.png', price: '5.00', name: 'Cookies', type: 'delicacies' },
  { image: 'delicacies2.png', price: '6.00', name: 'Croissant', type: 'delicacies' },
  { image: 'delicacies3.png', price: '4.00', name: 'Pretzel', type: 'delicacies' },
  { image: 'coffee1.png', price: '7.00', name: 'Black Cooffee', type: 'coffee' },
  { image: 'coffee2.png', price: '12.00', name: 'Pure Coffee', type: 'coffee' },
  { image: 'coffee3.png', price: '9.00', name: 'Milk Coffee', type: 'coffee' },
  { image: 'coffee4.png', price: '9.00', name: 'Moka Coffee', type: 'coffee' },
  { image: 'cake1.png', price: '6.00', name: 'Cream Cake', type: 'cakes' },
  { image: 'cake2.png', price: '5.00', name: 'Chocolate Croissant', type: 'cakes' },
  { image: 'cake3.png', price: '15.00', name: 'Pancake', type: 'cakes' },
  { image: 'cake4.png', price: '12.00', name: 'Milk Cake', type: 'cakes' },
];

function Products() {
  const [products, setProducts] = useState(productsArr);
  const [filtered, setFiltered] = useState<ProductsProps[]>([]);
  const [activeOption, setOptionActive] = useState('all');

  useEffect(() => {
    if (activeOption === 'all') {
      setFiltered(products);
      return;
    }

    const filtered = products.filter(project => project.type.includes(activeOption));

    setFiltered(filtered);
  }, [activeOption, products]);



  return (
    <section id="products" className={`${styles.products} section`}>
      <div className={`${styles.products__container} container`}>
        <h2 className="section__title">
          Escolha nossos deliciosos e melhores produtos
        </h2>

        <ul className={styles.products__filters}>
          {filters.map(filter => (
            <li key={filter.id} className={`${styles.products__item} ${styles.products__line} ${activeOption === filter.label ? styles.activeOption : ''}`} onClick={() => { setOptionActive(filter.label) }}>
              <h3 className={styles.products__title}>{filter.title}</h3>
              <span className={styles.products__stock}>{filter.stock} produtos</span>
            </li>
          ))}
        </ul>

        <motion.div
          className={`${styles.products__content} grid`}
          layout
        >
          <AnimatePresence>
            {filtered.map((products, index) => (
              <motion.article
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                layout
                key={index}
                className={styles.products__card}
              >
                <div className={styles.products__shape}>
                  <Image src={`assets/img/${products.image}`} className={styles.products__img} />
                </div>

                <div className={styles.products__data}>
                  <h2 className={styles.products__price}>R$ {products.price}</h2>
                  <h3 className={styles.products__name}>{products.name}</h3>

                  <Button clsName={styles.products__button}>
                    <BiShoppingBag />
                  </Button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export { Products }