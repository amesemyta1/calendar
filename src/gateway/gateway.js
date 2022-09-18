const baseUrl = 'https://62dacf26e56f6d82a76a312f.mockapi.io/api/v1/tasks';

export const formatNewEvent = (eventInput) => {
  const { title, date, startTime, endTime, description } = eventInput;
  const newEvent = {
    title,
    description,
    dateFrom: new Date(`${date} ${startTime}`),
    dateTo: new Date(`${date} ${endTime}`),
  };
  return newEvent;
};

export const postEvent = (eventData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Internal Server Error. Can't display events");
      }
    })
    .catch((error) => {
      alert(error.message);
    });

export const getEvent = (setFn) =>
  fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Internal Server Error. Can't display events");
    })
    .then((eventData) => {
      const updEventsList = eventData.map((event) => ({
        ...event,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      }));

      setFn(updEventsList);
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
      console.dir(error);
    });

export const fetchDelete = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Internal Server Error. Can't display events in fetchDelete"
        );
      }
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.message);
    });
};
