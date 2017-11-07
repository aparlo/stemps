(function ($) {

    var bar = $("#progressbar")[0];

    UIkit.upload('.test-upload', {

        url: '/newpost',
        multiple: true,

        beforeSend: function() { console.log('beforeSend', arguments); },
        beforeAll: function() { console.log('beforeAll', arguments); },
        load: function() { console.log('load', arguments); },
        error: function() { console.log('error', arguments); },
        complete: function() { console.log('complete', arguments); },

        loadStart: function (e) {
            console.log('loadStart', arguments);

            bar.removeAttribute('hidden');
            bar.max =  e.total;
            bar.value =  e.loaded;
        },

        progress: function (e) {
            console.log('progress', arguments);

            bar.max =  e.total;
            bar.value =  e.loaded;

        },

        loadEnd: function (e) {
            console.log('loadEnd', arguments);

            bar.max =  e.total;
            bar.value =  e.loaded;
        },

        completeAll: function () {
            console.log('completeAll', arguments);

            setTimeout(function () {
                bar.setAttribute('hidden', 'hidden');
            }, 1000);
            // for (var i = 0; i < files.length; i++) {
            //   console.log('Transfered files are' + files[i].name);
            // }


            alert('Upload Completed');
        }
    });

})(jQuery);

$('input[type="file"]').on('change', function (event, files, label) {
var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');
$('.filename').text(file_name);
});
