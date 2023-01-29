const languages = [
  {
    language: 'plaintext',
    extension: '.txt'
  },
  {
    language: 'abap',
    extension: '.abap'
  },
  {
    language: 'apex',
    extension: '.cls'
  },
  {
    language: 'azcli',
    extension: '.azcli'
  },
  {
    language: 'bat',
    extension: '.bat'
  },
  {
    language: 'bicep',
    extension: '.bicep'
  },
  {
    language: 'cameligo',
    extension: '.mligo'
  },
  {
    language: 'clojure',
    extension: '.clj'
  },
  {
    language: 'coffeescript',
    extension: '.coffee'
  },
  {
    language: 'c',
    extension: '.c'
  },
  {
    language: 'cpp',
    extension: '.cpp'
  },
  {
    language: 'csharp',
    extension: '.cs'
  },
  {
    language: 'csp',
    extension: ''
  },
  {
    language: 'css',
    extension: '.css'
  },
  {
    language: 'dart',
    extension: '.dart'
  },
  {
    language: 'dockerfile',
    extension: '.dockerfile'
  },
  {
    language: 'ecl',
    extension: '.ecl'
  },
  {
    language: 'elixir',
    extension: '.ex'
  },
  {
    language: 'flow9',
    extension: '.flow'
  },
  {
    language: 'fsharp',
    extension: '.fs'
  },
  {
    language: 'freemarker2',
    extension: '.ftl'
  },
  {
    language: 'go',
    extension: '.go'
  },
  {
    language: 'graphql',
    extension: '.graphql'
  },
  {
    language: 'handlebars',
    extension: '.handlebars'
  },
  {
    language: 'hcl',
    extension: '.tf'
  },
  {
    language: 'html',
    extension: '.html'
  },
  {
    language: 'ini',
    extension: '.ini'
  },
  {
    language: 'java',
    extension: '.java'
  },
  {
    language: 'javascript',
    extension: '.js'
  },
  {
    language: 'julia',
    extension: '.jl'
  },
  {
    language: 'kotlin',
    extension: '.kt'
  },
  {
    language: 'less',
    extension: '.less'
  },
  {
    language: 'lexon',
    extension: '.lex'
  },
  {
    language: 'lua',
    extension: '.lua'
  },
  {
    language: 'liquid',
    extension: '.liquid'
  },
  {
    language: 'm3',
    extension: '.m3'
  },
  {
    language: 'markdown',
    extension: '.md'
  },
  {
    language: 'mips',
    extension: '.s'
  },
  {
    language: 'msdax',
    extension: '.dax'
  },
  {
    language: 'mysql',
    extension: ''
  },
  {
    language: 'objective-c',
    extension: '.m'
  },
  {
    language: 'pascal',
    extension: '.pas'
  },
  {
    language: 'pascaligo',
    extension: '.ligo'
  },
  {
    language: 'perl',
    extension: '.pl'
  },
  {
    language: 'pgsql',
    extension: ''
  },
  {
    language: 'php',
    extension: '.php'
  },
  {
    language: 'pla',
    extension: '.pla'
  },
  {
    language: 'postiats',
    extension: '.dats'
  },
  {
    language: 'powerquery',
    extension: '.pq'
  },
  {
    language: 'powershell',
    extension: '.ps1'
  },
  {
    language: 'proto',
    extension: '.proto'
  },
  {
    language: 'pug',
    extension: '.jade'
  },
  {
    language: 'python',
    extension: '.py'
  },
  {
    language: 'qsharp',
    extension: '.qs'
  },
  {
    language: 'r',
    extension: '.r'
  },
  {
    language: 'razor',
    extension: '.cshtml'
  },
  {
    language: 'redis',
    extension: '.redis'
  },
  {
    language: 'restructuredtext',
    extension: '.rst'
  },
  {
    language: 'ruby',
    extension: '.rb'
  },
  {
    language: 'rust',
    extension: '.rs'
  },
  {
    language: 'sb',
    extension: '.sb'
  },
  {
    language: 'scala',
    extension: '.scala'
  },
  {
    language: 'scheme',
    extension: '.scm'
  },
  {
    language: 'scss',
    extension: '.scss'
  },
  {
    language: 'shell',
    extension: '.sh'
  },
  {
    language: 'sol',
    extension: '.sol'
  },
  {
    language: 'aes',
    extension: '.aes'
  },
  {
    language: 'sparql',
    extension: '.rq'
  },
  {
    language: 'sql',
    extension: '.sql'
  },
  {
    language: 'st',
    extension: '.st'
  },
  {
    language: 'swift',
    extension: '.swift'
  },
  {
    language: 'systemverilog',
    extension: '.sv'
  },
  {
    language: 'verilog',
    extension: '.v'
  },
  {
    language: 'tcl',
    extension: '.tcl'
  },
  {
    language: 'twig',
    extension: '.twig'
  },
  {
    language: 'typescript',
    extension: '.ts'
  },
  {
    language: 'vb',
    extension: '.vb'
  },
  {
    language: 'xml',
    extension: '.xml'
  },
  {
    language: 'yaml',
    extension: '.yaml'
  },
  {
    language: 'json',
    extension: '.json'
  }
]

window.languages = languages

function findLanguage (language) {
  return languages.find(l => l.language === language)
}
