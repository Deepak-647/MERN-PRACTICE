// schema.parseAsync(req.body) is the line where you use Zod to validate the request body data against the defined schema.

const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      console.log(err)
      const message = err.errors[0].message;
      res.status(400).json({ message });
    }
  };
  
  module.exports = validate;