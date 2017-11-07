$('input[type="file"]').on('change', function (event, files, label) {
var file_name = this.files;
for (let i = 0; i < file_name.length; i++) {
  $('.test').append(file_name[i].name)
}
});
