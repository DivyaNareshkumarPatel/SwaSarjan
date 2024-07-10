


export const getEvents = async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).send(events);
    } catch (error) {
      res.status(500).send(error);
    }
  }