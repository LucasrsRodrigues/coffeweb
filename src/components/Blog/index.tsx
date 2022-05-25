import styles from '@/styles/components/Blog.module.scss';
import { BiRightArrowAlt, BiComment, BiShow } from 'react-icons/bi';


const articles = [
  { id: 0, image: 'blog1.png', title: '10 Coffee Recommendations', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repudiandae accusamus consectetur corporis quasi sunt fuga eius autem nihil nobis, perspiciatis aliquam cupiditate ut, porro voluptatibus voluptate sequi molestiae perferendis!', comments: '12', views: '76,5k' },
  { id: 1, image: 'blog2.png', title: '12 Benefits Of Drinking Coffee', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla repudiandae accusamus consectetur corporis quasi sunt fuga eius autem nihil nobis, perspiciatis aliquam cupiditate ut, porro voluptatibus voluptate sequi molestiae perferendis!', comments: '45', views: '365,5k' },
]


function Blog() {
  return (
    <section className={`${styles.blog} section`} id="blog">
      <div className={`${styles.blog__container} container`}>
        <h2 className="section__title">
          Our Blogs Coffee with trending topic for hits week
        </h2>

        <div className={`${styles.blog__content} grid`}>

          {articles.map(article => (

            <article className={styles.blog__card}>
              <div className={styles.blog__image}>
                <img src={`assets/img/${article.image}`} alt="" className={styles.blog__img} />
                <a href="" className={styles.blog__button}>
                  <BiRightArrowAlt />
                </a>
              </div>

              <div className="blog__data">
                <h2 className={styles.blog__title}>{article.title}</h2>

                <p className={styles.blog__description}>{article.description}</p>

                <div className={styles.blog__footer}>
                  <div className={styles.blog__reaction}>
                    <BiComment />
                    <span>{article.comments}</span>
                  </div>

                  <div className={styles.blog__reaction}>
                    <BiShow />
                    <span>{article.views}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  )
}


export { Blog };