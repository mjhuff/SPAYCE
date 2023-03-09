import { useState, useEffect } from 'react';

//Need to look up if the thing is favorited. If it is, display favorite, if it isn't display unfavorite.
const FavoriteButton = ({ url }) => {
  const [buttonText, setButtonText] = useState('Loading');

  //Do fetch here. Set the loading to false at end and use the returned DB stuff to change the button text.
  useEffect(() => {
    if (buttonText !== 'Loading') return;
    fetch('/api/singleFav', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'find', urlLookup: url }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) setButtonText('Favorite');
        else setButtonText('Unfavorite');
      });
  }, [url, buttonText]);

  const dbUpdateHandler = () => {
    if (buttonText === 'Loading') return;

    if (buttonText === 'Favorite') {
      fetch('/api/singleFav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method: 'add', urlLookup: url }),
      });
      setButtonText('Unfavorite');
    } else if (buttonText === 'Unfavorite') {
      fetch('/api/singleFav', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ method: 'remove', urlLookup: url }),
      });
      setButtonText('Favorite');
    }
  };

  return (
    <button
      className="text-white bg-slate-700 mb-2 rounded-xl px-5 py-2 hover:bg-slate-600"
      onClick={dbUpdateHandler}
    >
      {buttonText}
    </button>
  );
};

export default FavoriteButton;
