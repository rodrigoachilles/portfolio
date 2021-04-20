import db from '../../../../db.json';

export default function findById(req, res) {
  const { id } = req.query;
  const projectFound = db.projects.filter((project) => project.id === id)[0];
  res.status(200).json(projectFound);
}
