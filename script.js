// data
var scenes = [
  {
    poem: 'The plan of such a house will be characteristically different from all other houses. It need only be a room.',
    icon: 'mint.png',
    spec: {
      plant: 'Mint',
      symbolism: 'Hospitality',
      usage: 'Facilitate Digestion',
      politics: 'Open Source Ecology Microhouse'
    }
  },
  {
    poem: 'I am reintroducing species to areas in which they had formerly thrived. Reclaiming. Relocation. Even the accidental.',
    icon: 'lavender.png',
    spec: {
      plant: 'Lavender',
      symbolism: 'Devotion',
      usage: 'Restlessness, Insomnia, Nervousness, Depression, Headaches',
      politics: 'Rachel Frank'
    }
    },
  {
    poem: 'A rally mobilized 1,200 people and resulted in dance, music, muraling, film, poetry...',
    icon: 'raspberry.png',
    spec: {
      plant: 'Raspberry',
      symbolism: 'Kindness',
      usage: 'Cervical Health, Childbirth',
      politics: 'YMPJ'
    }
  },
  {
    poem: 'Agro-enterprises. Miners. All around the world. Lending.',
    icon: 'chamomile.png',
    spec: {
      plant: 'Chamomile',
      symbolism: 'Wealth',
      usage: 'Calming',
      politics: 'AgroLifeCoin'
    }
  },
  {
    poem: 'I wrote his project proposal and he made my design in glass.',
    icon: 'dandelion.png',
    spec: {
      plant: 'Dandelion',
      symbolism: 'Connection',
      usage: 'Process and Digest Fat',
      politics: 'Our Goods'
    }
  },
  {
    poem: 'We are a liquid democracy.',
    icon: 'ginger.png',
    spec: {
      plant: 'Ginger',
      symbolism: 'Power',
      usage: 'Ulcers, Nausea, Diarrhea',
      politics: 'g0v.tw'
    }
  },
  {
    poem: 'Living as an integral component in our small world. This effort confirms the fact that we rely on the life systems for survival, and at the same time, the ecological systems depend upon our efforts.',
    icon: 'violet.png',
    spec: {
      plant: 'Violet',
      symbolism: 'Purity',
      usage: 'Colds, Coughs',
      politics: 'BiosphereX'
    }
  },
  {
    poem: 'The system stores and creates energy throughout the day. Any extra energy flows back onto the grid. It is self-healing.',
    icon: 'marigold.png',
    spec: {
      plant: 'Marigold',
      symbolism: 'The Sun',
      usage: 'Anti-Fungal, Anti-Septic',
      politics: 'Solar City'
    }
  },
  {
    poem: 'Coordinated patterns of greater and greater diversity.',
    icon: 'rose.png',
    spec: {
      plant: 'Rose',
      symbolism: 'Passion',
      usage: 'Anti-Depressant, Anti-Spasmodic, Aphrodisiac',
      politics: 'Biome Arts'
    }
  },
  {
    poem: 'The shocks: earthquakes, fires, floods, etc. The stresses that weaken the fabric of a city on a day to day or cyclical basis: high unemployment, endemic violence, chronic food and water shortages.',
    icon: 'bee.png',
    spec: {
      plant: 'Bee',
      symbolism: 'Diligence',
      usage: 'Anti-Septic',
      politics: '100 Resilient Cities'
    }
  },
  {
    poem: 'In every way, shape, and form, we are at war.',
    icon: 'elderflower.png',
    spec: {
      plant: 'Elderflower',
      symbolism: 'Fire',
      usage: 'Cold, Flu, Congestion',
      politics: 'Mary Mattingly'
    }
  },
  {
    poem: 'Repositories are places where we can share our work with the world and solicit feedback, while others can fork the story and make their own variation.',
    icon: 'ant.png',
    spec: {
      plant: 'Ant',
      symbolism: 'Collectivity',
      usage: 'n/a',
      politics: 'Github'
    }
  },
  {
    poem: 'We are dynamically prepared for the rapid changes occurring in our global climate, energy, and economic systems. Families, communities, businesses, and governments work collaboratively for a graceful and ethical transition.',
    icon: 'apple.png',
    spec: {
      plant: 'Apple',
      symbolism: 'Immortality',
      usage: 'Cancer, Hypertension, Diabetes, Heart Disease',
      politics: 'Appleseed Permaculture'
    }
  },
  {
    poem: 'Fieldworks. Lead poisoning. Pop up bookstore. Rebel coffee service. Bioremediation.',
    icon: 'pear.png',
    spec: {
      plant: 'Pear',
      symbolism: 'Fertility',
      usage: 'Diaretic, Anaglesic',
      politics: 'A Blade of Grass'
    }
  },
  {
    poem: 'A floating barge, a functional model. A space for human enjoyment of the water.',
    icon: 'lemon.png',
    spec: {
      plant: 'Lemon',
      symbolism: 'Fidelity',
      usage: 'Anti-Septic, Fever, Dental Care, Weight Loss',
      politics: 'Hyphae'
    }
  },
  {
    poem: 'A climate stabilizing agricultural system.',
    icon: 'fennel.png',
    spec: {
      plant: 'Fennel',
      symbolism: 'Boldness',
      usage: 'Anti-Spasmodic, Anti-Depressant, Anti-Microbial',
      politics: 'Experimental Farm Network'
    }
  },
  {
    poem: 'Resilience',
    icon: 'oregano.png',
    spec: {
      plant: 'Oregano',
      symbolism: 'Tranquility',
      usage: 'Anti-Bacterial, Anti-Inflamatory, Cancer',
      politics: 'Eco Trust'
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
  specHTML += makeSpecSectionHTML('Plant:', spec.plant)
  specHTML += makeSpecSectionHTML('Symbolism:', spec.symbolism)
  specHTML += makeSpecSectionHTML('Medicinal Use:', spec.usage)
  specHTML += makeSpecSectionHTML('Political Pairing:', spec.politics)

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
