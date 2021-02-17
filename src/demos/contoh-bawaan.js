export default [
  {
    input: 'berbasiskan JSON',
    input: 'Ini input sederhana',
    output: ['ini output sederhana']
  },
  {
    input: `bisa juga dibuat berwarna`,
    output: [
      `Ini warna <span style="color:#33BBC8">cyan</span> dan <span style="color:yellow">kuning</span> dan <span style="color:red">merah</span>`
    ]
  },
  {
    input: 'kita coba beberapa unicode dan emoji  yuk... 😍',
    output: ['❤️ love it! <span style="color:#25BC24">✔︎</span> Mantap! 👍']
  },
  {
    input: 'berputar via "replace"',
    output: [
      { content: '| Loading', replace: true },
      { content: '/ Loading', replace: true },
      { content: '- Loading', replace: true },
      { content: '\\ Loading', replace: true },
      { content: '| Loading', replace: true },
      { content: '/ Loading', replace: true },
      { content: '- Loading', replace: true },
      { content: 'Selesai' }
    ]
  },
  {
    input: 'gimana dengan spasi?',
    output: ['       kanan', 'kiri      !', 'garis...<br/><br/>dapat dilompati']
  },
  {
    input: 'berbaris berurutan',
    output: [
      'baris 1: tu...',
      'baris 2: wa...',
      'baris 3: ga...',
      'baris 4: pat...',
      'baris 5: ma...',
      'Selesai!'
    ]
  }
]
