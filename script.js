$(document).ready(function() {
    $('#greeting').animate({
        opacity: 1,
        marginTop: '-500px'
    }, 1000, function() {
        $('<img id="vk" src="utils/vk.png">').appendTo('body');
        $('#vk').animate({
            opacity: 1,
            marginBottom: '450px',
            marginLeft: '-100px'
        }, 1000, function() {
            $('<img id="welcome" src="utils/discord.png">').appendTo('body');
            $('#welcome').animate({
                opacity: 1,
                marginBottom: '450px'
            }, 1000, function() {
                $('#welcome').click(function() {
                    window.open('https://www.discord.com/users/1071204110398922792', '_blank');
                });
                $('#vk').click(function() {
                    window.open('https://vk.com/sendhelloworld', '_blank');
                });
            });
        });

        $('<img id="github" src="utils/github.png">').appendTo('body');
        $('#github').animate({
            opacity: 1,
            marginBottom: '450px',
            marginLeft: '100px'
        }, 1000, function() {
            $('#github').click(function() {
                window.open('https://github.com/Crone720', '_blank');
            });
        });
    });

    $('<img id="spotify" src="utils/spotify.png">').appendTo('body');
    $('#spotify').animate({
        opacity: 1,
        marginBottom: '450px',
        marginLeft: '195px'
    }, 1000, function() {
        $('#spotify').click(function() {
            window.open('https://open.spotify.com/user/31e6er6ajpp2krsizawn743szmoq?si=4a449ec37e9f4bb1', '_blank');
        });
    });
});

$('<img id="taxi" src="utils/taxi.jpg">').appendTo('body');
$('#taxi').animate({
    opacity: 1,
    marginBottom: '450px',
    marginLeft: '-195px'
}, 1000, function() {
    $('#spotify').click(function() {
        window.open('https://ru.busti.me/spb/timetable/', '_blank');
    });
});

$(document).keydown(function(event) {
    if ((event.key === "z" || event.key === "Z") && event.originalEvent.repeat === false) {
        window.location.href = 'poker.html';
    }
});
