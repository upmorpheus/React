import React, { useState, useContext } from 'react';

import AppContext from '../../../context/AppContext';

const SkillsTab = ({ data, onChange }) => {
  const context = useContext(AppContext);
  const { dispatch } = context;

  return (
    <>
      {data.skills.items.map((x, index) => (
        <Item item={x} key={x} index={index} onChange={onChange} dispatch={dispatch} />
      ))}
      <AddItem dispatch={dispatch} />
    </>
  );
};

const AddItem = ({ dispatch }) => {
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState('');

  const addItem = () => {
    dispatch({
      type: 'add_item',
      payload: {
        key: 'skills',
        value: item,
      },
    });

    setItem('');
    setOpen(false);
  };

  return (
    <div className="mt-4 border border-gray-200 rounded p-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <h6 className="text-sm font-medium">Add Skill</h6>
        <i className="material-icons">{isOpen ? 'expand_less' : 'expand_more'}</i>
      </div>

      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="mt-4 grid grid-cols-4 col-gap-4">
          <div className="col-span-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Cooking"
              value={item}
              onChange={e => setItem(e.target.value)}
              type="text"
            />
          </div>

          <button
            type="button"
            onClick={addItem}
            className="col-span-1 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded"
          >
            <div className="flex justify-center items-center">
              <i className="material-icons font-bold text-lg">add</i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const Item = ({ item, index, onChange, dispatch }) => {
  const identifier = `data.skills.items[${index}]`;

  const deleteItem = () =>
    dispatch({
      type: 'delete_item',
      payload: {
        key: 'skills',
        value: item,
      },
    });

  return (
    <div className="mt-4 grid grid-cols-6">
      <div className="col-span-5">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Cooking"
          value={item}
          onChange={e => onChange(`${identifier}`, e.target.value)}
          type="text"
        />
      </div>

      <button
        type="button"
        onClick={deleteItem}
        className="col-span-1 text-gray-600 hover:text-red-600 text-sm font-medium"
      >
        <div className="flex justify-end items-center">
          <i className="material-icons font-bold text-lg pr-4">close</i>
        </div>
      </button>
    </div>
  );
};

export default SkillsTab;
