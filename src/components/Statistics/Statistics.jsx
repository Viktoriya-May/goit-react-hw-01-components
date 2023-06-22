import PropTypes from 'prop-types';
import css from './Statistic.module.css';


const createColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.5 +
      ')';
  
    return color;
  };
  
export const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.stats__list}>

  {stats.map(({ id, label, percentage }) => {
          return (
                 <li 
                    className={css.stats}
                    key ={id}
                    style = {{ backgroundColor: createColor()}}
                    >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                     </li>
          );
  })}
  </ul>
</section>
    );
};

Statistics.propTypes = {
    title: PropTypes.number,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired

     }