const initialSize = 1000

var data = {
  name: "Languages",
  children: getChildren([    {
      name: 'JavaScript',
      sizePercent: '40%',
      children: [
        {
          name: 'Node.js',
          sizePercent: '25%',
          children: [
            // {
            //   name: 'Express'
            // },
            // {
            //   name: 'Socket.IO'
            // },
            // {
            //   name: 'ES6+'
            // },
            // {
            //   name: 'TypeScript'
            // },
            {
              name: 'Debugging tools'
            },
            {
              name: 'CLI development'
            },
            {
              name: 'API (fs, path, etc.)'
            }
          ]
        },
        {
          name: 'Mobile / Desktop',
          sizePercent: '25%',
          children: [
            {
              name: 'Electron',
              sizePercent: '30%'
            },
            // {
            //   name: 'Cordova',
            //   sizePercent: '30%'
            // },
            // {
            //   name: 'Ionic (Angular, Vue)',
            //   sizePercent: '20%'
            // },
            // {
            //   name: 'Quasar (Vue)',
            //   sizePercent: '5%'
            // },
            // {
            //   name: 'Framework7 (Vue)',
            //   sizePercent: '2%'
            // },
            {
              name: 'PWA',
              sizePercent: '13%'
            }
          ]
        },
        {
          name: 'Frameworks',
          sizePercent: '35%',
          children: [
            {
              name: 'Vue (experienced)',
              sizePercent: '80%',
              children: [
                // {
                //   name: 'Nuxt.js (experienced)',
                //   sizePercent: '80%'
                // },
                // {
                //   name: 'Full TypeScript integration'
                // },
                // {
                //   name: 'Apollo (GraphQL)'
                // },
                // {
                //   name: 'Style guide (best practices)'
                // },
                {
                  name: 'UI',
                  children: [
                    {
                      name: 'Vuetify (experienced)',
                      sizePercent: '80%'
                    },
                    {
                      name: 'Materialize',
                      sizePercent: '40%'
                    },
                    {
                      name: 'Element Ui',
                      sizePercent: '5%'
                    },
                    {
                      name: 'Bootstrap Vue',
                      sizePercent: '30%'
                    },

                    {
                      name: 'iView',
                      sizePercent: '2.5%'
                    },
                    {
                      name: 'Buefy',
                      sizePercent: '2.5%'
                    }
                  ]
                },
                {
                  name: 'Router'
                },
                {
                  name: 'Vuex'
                },
              ]
            },
            // {
            //   name: 'React',
            //   sizePercent: '20%',
            //   children: [
            //     {
            //       name: 'Router'
            //     },
            //     {
            //       name: 'Redux'
            //     },
            //     {
            //       name: 'JSX'
            //     },
            //     {
            //       name: 'Material-UI'
            //     }
            //   ]
            // },
            // {
            //   name: 'Angular',
            //   sizePercent: '5%'
            // }
          ]
        },
        {
          name: 'Static analyzers',
          sizePercent: '10%',
          children: [
            {
              name: 'ESLint',
              sizePercent: '80%'
            },
            {
              name: 'Prettier',
              sizePercent: '20%'
            }
          ]
        },
        {
          name: 'Build tools',
          sizePercent: '30%',
          children: [
            {
              name: 'Babel',
              sizePercent: '30%'
            },
            {
              name: 'Webpack',
              sizePercent: '50%'
            },
            {
              name: 'Rollup',
              sizePercent: '20%'
            }
          ]
        },
        {
          name: 'Tests',
          sizePercent: '5%',
          children: [
            {
              name: 'Jest',
              sizePercent: '50%'
            },
            {
              name: 'Vue utils',
              sizePercent: '10%'
            },
            {
              name: 'Cypress',
              sizePercent: '10%'
            },
            {
              name: 'Selenium',
              sizePercent: '30%'
            }
          ]
        }
      ]
    },
    {
      name: 'CSS',
      sizePercent: '10%',
      children: [
        {
          name: 'Preprocessors',
          children: [
            {
              name: 'Stylus',
              sizePercent: '40%'
            },
            {
              name: 'Sass / SCSS',
              sizePercent: '30%'
            },
            {
              name: 'LESS ',
              sizePercent: '10%'
            },
            {
              name: 'PostCSS ',
              sizePercent: '20%'
            }
          ]
        },
        {
          name: 'Static analyzers',
          children: [
            {
              name: 'Stylelint',
              sizePercent: '60%'
            },
            {
              name: 'Prettier',
              sizePercent: '20%'
            },
            {
              name: 'CSS Stats',
              sizePercent: '10%'
            },
            {
              name: 'Parker',
              sizePercent: '10%'
            }
          ]
        },
        {
          name: 'Special features',
          children: [
            {
              name: 'Flexbox',
              sizePercent: '50%'
            },
            {
              name: 'Grid Layout',
              sizePercent: '5%'
            },
            {
              name: 'Custom properties',
              sizePercent: '5%'
            },
            {
              name: 'Shorthand properties',
              sizePercent: '20%'
            },
            {
              name: 'Media queries',
              sizePercent: '20%'
            }
          ]
        },
        {
          name: 'Framework',
          children: [
            {
              name: 'Bootstrap',
              sizePercent: '50%'
            },
            {
              name: 'Semantic UI',
              sizePercent: '5%'
            },
            {
              name: 'Materialize',
              sizePercent: '25%'
            },
          ]
        }
      ]
    },
    {
      name: 'СУБД',
      children: [
        {
          name: 'MySQL',
          sizePercent: '70%'
        },
        {
          name: 'PostgreSQL',
          sizePercent: '20%'
        },
      ]
    },
    {
      name: 'OOP',
      children: [

      ]
    },
    {
      name: 'Patterns',
      children: [
        {
          name: 'Creational',
          children: [
            {
              name: 'Singleton'
            },
            {
              name: 'Builder'
            },
            {
              name: 'Factory Method'
            },
            {
              name: 'Abstract Factory'
            },
            {
              name: 'Prototype'
            },
            {
              name: 'Constructor (JS)'
            },
          ]
        },
        {
          name: 'Structural',
          children: [
            {
              name: 'Decorator'
            },
            {
              name: 'Proxy'
            },
            {
              name: 'Adapter'
            },
            {
              name: 'Bridge'
            },
            {
              name: 'Facade'
            },
            {
              name: 'Mixin'
            }
          ]
        },
        {
          name: 'Behavioral',
          children: [
            {
              name: 'Mediator'
            },
            {
              name: 'Observer'
            },
            {
              name: 'pub/sub'
            },
            {
              name: 'Command'
            },
            {
              name: 'Chain of responsibility'
            },
            {
              name: 'Strategy'
            }
          ]
        }
      ]
    },
    {
      name: 'Ajax',
      sizePercent: '10%',
      children: [
        {
          name: 'fetch',
          sizePercent: '10%'
        }
      ]
    },
    {
      name: 'Git',
      sizePercent: '10%',
      children: [
        {
          name: 'Gitlab',
          sizePercent: '10%'
        },
        {
          name: 'Github',
          sizePercent: '67%'
        },
        {
          name: 'commitizen',
          sizePercent: '1%'
        },
        {
          name: 'commitlint',
          sizePercent: '1%'
        },
        {
          name: 'semantic-release',
          sizePercent: '1%'
        }
      ]
    },
    {
      name: 'Other',
      sizePercent: '2%',
      children: [
        {
          name: 'Firebase',
          children: [
            {
              name: 'Authentication',
              sizePercent: '60%'
            },
            {
              name: 'Database',
              children: [
                {
                  name: 'Cloud',
                  sizePercent: '60%'
                },
                {
                  name: 'Realtime',
                  sizePercent: '60%'
                },
              ]
            },
            {
              name: 'Storage',
              sizePercent: '60%'
            },
            {
              name: 'Hosting',
              sizePercent: '60%'
            },
            {
              name: 'Function',
              sizePercent: '10%'
            },
            {
              name: 'Perfomance',
              sizePercent: '20%'
            },

          ]
        },
        {
          name: 'Google Cloud Platform',
          sizePercent: '5%'
        },
        {
          name: 'IDE',
          children: [
            {
              name: 'PhpStorm'
            },
            {
              name: 'WebStorm'
            },
            {
              name: 'Atom'
            },
            {
              name: 'Visual Studio'
            },
            {
              name: 'NetBeans'
            },
            {
              name: 'IntelliJ IDEA (Cordova)'
            }
          ]
        },
        {
          name: 'Chrome Web Store',
          sizePercent: '60%'
        }
      ]
    },
    {
      name: 'SoftSkills',
      children: [
        {
          name: 'Selfmanagment',
          children: [
            {
              name: 'toggl.com',
              sizePercent: '40%'
            },
            {
              name: 'googleKeep',
              sizePercent: '40%'
            },
            {
              name: 'google Календарь',
              sizePercent: '40%'
            },
          ]
        },
      ]
    },
    {
      name: 'Team work',
      children: [
        {
          name: 'Умение взаимодействовать',
          sizePercent: '30%'
        },
        {
          name: 'Положительный настрой',
          sizePercent: '100%'
        },
        {
          name: 'Брать ответственность на\n' +
            'себя',
          sizePercent: '100%'
        },
        {
          name: 'Готовность изменяться',
          sizePercent: '100%'
        },
        {
          name: 'Готовность\n' +
            'обучаться',
          sizePercent: '100%'
        },
        {
          name: 'Признавать свои ошибки',
          sizePercent: '100%'
        },
      ]
    },
    {
      name: 'language',
      children: [
        {
          name: 'English',
          sizePercent: '30%'
        },
        {
          name: 'Polish',
          sizePercent: '20%'
        },
        {
          name: 'Russian',
          sizePercent: '90%'
        },
        {
          name: 'Ukrainian',
          sizePercent: '80%'
        },
      ]
    }
  ], true)
}

function getChildren (children, isRoot) {
  return children.map(i => {
    if (isRoot) {
      i.parentSize = initialSize
    }

    const { parentSize, sizePercent } = i
    let size

    if (sizePercent) {
      size = (parseInt(sizePercent) / 100) * parentSize
    } else {
      size = parentSize / children.length
    }

    const returnObj = {
      ...i,
      parentSize,
      size
    }

    if (returnObj.children) {
      returnObj.children = returnObj.children.map(child => ({
        ...child,
        parentSize: size
      }))
      returnObj.children = getChildren(returnObj.children)
    }

    return returnObj
  })
}

