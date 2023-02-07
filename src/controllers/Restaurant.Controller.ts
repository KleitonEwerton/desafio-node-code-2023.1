import { restaurantRepository } from "./../repositories/Restaurant.Repository";
export class RestaurantController {
  async create(req, res) {
    const { body } = req;
    const restaurant = await restaurantRepository.save(body);
    return res.status(201).json({
      message: "Restaurant created",
      payload: restaurant,
      success: true,
    });
  }

  async view(req, res) {
    const id = parseInt(req.params.id);
    const restaurant = await restaurantRepository.findOneBy({ id: id });

    if (restaurant) {
      return res.status(200).json({
        message: "Restaurant found",
        payload: restaurant,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Restaurant not found",
        id : id,
        success: false,
      });
    }
  }

  async update(req, res) {
    const id = parseInt(req.params.id);
    const { body } = req;

    const restaurant = await restaurantRepository.findOneBy({ id: id });
    if (restaurant) {
      await restaurantRepository.update(id, body);
      return res.status(200).json({
        message: "Restaurant updated",
        payload: restaurant,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Restaurant not found",
        id: id,
        success: false,
      });
    }
  }

  async delete(req, res) {
    const id = parseInt(req.params.id);
    const restaurant = await restaurantRepository.findOneBy({ id: id });

    if (restaurant) {
      await restaurantRepository.remove(restaurant);
      return res.status(200).json({
        message: "Restaurant deleted",
        payload: restaurant,
        success: true,
      });
    } else {
      return res.status(404).json({
        message: "Restaurant not found",
        id: id,
        success: false,
      });
    }
  }

  async getAll(req, res) {
    const restaurants = await restaurantRepository.find();
    return res.status(200).json({
      message: "Restaurants found",
      payload: restaurants,
      success: true,
    });
  }
}
