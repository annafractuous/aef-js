// data
var scenes = [
  {
    poem: 'The plan of such a house will be characteristically different from all other houses. It need only be a room.',
    icon: '8_string-habitable-social-structure-by-numenfor-use_popup.jpg',
    spec: {
      plant: 'Mint',
      symbolism: 'Hospitality',
      usage: 'Facilitate Digestion',
      politics: 'Open Source Ecology Microhouse'
    }
  },
  {
    poem: 'I am reintroducing species to areas in which they had formerly thrived. Reclaiming. Relocation. Even the accidental.',
    icon: '168fa7_5bdb6fd4a40a43f3ad9a2780738ba26a-mv2_d_3024_3024_s_4_2.jpg_srz_568_556_85_22_0.50_1.20_0.jpg',
    spec: {
      plant: 'Lavender',
      symbolism: 'Devotion',
      usage: 'Restlessness, Insomnia, Nervousness, Depression, Headaches',
      politics: 'Rachel Frank'
    }
  }
]

//what's up!

// parameters
const delayBetween = {
  poem: {
    word: 500
  },
  spec: {
    section: 2000
  }
}
const fadeInTime = {
  poem: {
    word: 750
  },
  icon: {
    image: 1500
  },
  spec: {
    section: 1500
  }
}
const fadeOutTime = {
  scene: 2500
}

// mechanism
// do not touch
var $poem
var $icon
var $spec
var currentIndex = 0

function init() {
  $poem = $('#poem')
  $icon = $('#icon')
  $spec = $('#spec')
  draw()
}

function makeSpecSectionHTML(title, content) {
  return '<div class="section">' + '<div class="title">' + title + '</div>' + '<div class="content">' + content + '</div>' + '</div>'
}

function draw() {
  $poem.empty().show()
  $icon.empty().show()
  $spec.empty().show()

  var poem = scenes[currentIndex].poem
  var icon = scenes[currentIndex].icon
  var spec = scenes[currentIndex].spec

  $icon.html($('<img>').attr('src', 'assets/' + icon)).children().hide().fadeIn(fadeInTime.icon.image)

  console.log('Draw %c' + spec.plant, 'font-weight: bold')

  var poemHTML = poem.split(' ').map(function(word) {
    return '<span>' + word + ' ' + '</span>'
  }).join('')

  var specHTML = ''
  specHTML += makeSpecSectionHTML('Plant', spec.plant)
  specHTML += makeSpecSectionHTML('Symbolism', spec.symbolism)
  specHTML += makeSpecSectionHTML('Medicinal Use', spec.usage)
  specHTML += makeSpecSectionHTML('Political Pairing', spec.politics)

  // https://stackoverflow.com/questions/11637582/fading-a-paragraph-in-word-by-word-using-jquery
  $poem.html(poemHTML).children().hide().each(function(i) {
    $(this).delay(i * delayBetween.poem.word).fadeIn(fadeInTime.poem.word)
  }).promise().done(function() {
    console.log('Poem completed')

    $spec.html(specHTML).children().hide().each(function(i) {
      $(this).delay(i * delayBetween.spec.section).fadeIn(fadeInTime.spec.section)
    }).promise().done(function() {
      console.log('Spec completed')

      $('#scene').children().each(function() {
        $(this).fadeOut(fadeOutTime.scene)
      }).promise().done(function() {
        console.log('Scene completed')

        currentIndex = currentIndex + 1 >= scenes.length ? 0 : currentIndex + 1
        draw()
        console.log('%casync0', 'color: #aaa')
      })
    })
  })
  console.log('%csync0', 'color: #aaa')
}

$(init)
