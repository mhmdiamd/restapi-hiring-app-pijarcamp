import { createAndUpload, auth } from '../../../Config/googleDrive.config.js';
import HttpException from '../../Exceptions/http.exceptions.js';
import { successResponse } from '../../Helpers/response.js';
import ExperienceModel from './experience.model.js';


class ExperienceController {
  #experienceModel = new ExperienceModel();
  // #ENDPOINT = 'api/v1/experiences';

  getExperienceByIdWorker = async (req, res, next) => {
    const { idWorker } = req.params;
    try {
      const experiences = await this.#experienceModel.getExperienceByIdWorker(idWorker);
      successResponse(res, 200, `Get experiences with ID ${idWorker} success!`, experiences);
    } catch (err) {
      next(new HttpException(err.status, err.message));
    }
  };

  
  createExperience = async (req, res, next) => {
    const {id} = req.user
    const data = {id_worker: id, ...req.body}
    try {
      const {career_start, career_end, ...other} = data
      if(req.file){
       // Upload To Drive
       const uploadToDrive = await createAndUpload(auth, req.file)
       // Generate photo Url
       const photoLink = `https://drive.google.com/uc?id=${uploadToDrive.id}`
       await this.#experienceModel.createExperience({...other, company_photo: photoLink});
      }else {
       await this.#experienceModel.createExperience(other);
      }
      successResponse(res, 200, `Create Experience success!`, {message : 'Experience success created!'});
    } catch (err) {
      next(new HttpException(err.status, err.message));
    }
  };

  // Get recruter By Id
  getExperienceById = async (req, res, next) => {
    const { id } = req.params;
    try {

      const experience = await this.#experienceModel.getExperienceById(id);
      successResponse(res, 200, `Get Experience with ID ${id} success!`, experience);
    } catch (err) {
      next(new HttpException(err.status, err.message));
    }
  };

  // Delete recruter
  deleteExperienceById = async (req, res, next) => {
    const { id } = req.params;
    try {
      await this.#experienceModel.deleteExperienceById(id);
      successResponse(res, 200, `Delete Experience with ID ${id} success!`, { message: 'Experience Deleted!' });
    } catch (err) {
      next(new HttpException(err.status, err.message));
    }
  };

  // Update recruter By Id
  updateExperienceById = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
      await this.#experienceModel.updateExperienceById(id, data);

      successResponse(res, 200, `Update Experience with ID ${id} success!`, { message: 'Experience Updated!' });
    } catch (err) {
      next(new HttpException(err.status, err.message));
    }
  };
}

export default ExperienceController;
