
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', thing: {a: 1} });
};

exports.about = function(req, res){
  res.render('about', { title: 'About Us', 
                        data: {
                            desc: 'This is a Node.js and Express.js demo project!' 
                        }
                    });
};

exports.dog = function(req, res){
  res.render('dog', {title: 'This is Dog.', dog: 'http://imgur.com/zW1d4mN.jpg'});
};