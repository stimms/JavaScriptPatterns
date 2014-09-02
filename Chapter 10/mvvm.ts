class PageModel{
  titleVisible: boolean;
  users: Array<User>;
}

var model = new PageModel();
model.titleVisible = false;
var controller = new UserListPageController(model);

controller.AddUser(new User());

assert.true(model.titleVisible);

class User{}
