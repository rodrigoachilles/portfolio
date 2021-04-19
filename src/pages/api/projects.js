import projects from '../../../db.json';

export default function findAll(req, res) {
  res.status(200).json(projects);
}
