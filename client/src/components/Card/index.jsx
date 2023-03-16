import { Link } from 'react-router-dom';

import CrossIcon from './CrossIcon';

const Card = ({
  onClick = '#',
  title = '',
  description = '',
  onDelete,
  ...props
}) => (
  <div
    className="mx-auto overflow-hidden rounded-xl bg-white shadow-md"
    {...props}
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0"></div>
      <div className="p-8">
        <div className="flex justify-between">
          <Link
            to={onClick}
            className="mt-1 block text-lg font-medium leading-tight text-gray-800 hover:underline"
          >
            {title}
          </Link>
          {onDelete && (
            <button
              className="mt-1 block text-lg font-medium leading-tight text-gray-800 hover:underline"
              onClick={onDelete}
            >
              <CrossIcon />
            </button>
          )}
        </div>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

export default Card;
