import Transcriptor from './rna-transcription'

describe('Transcriptor', () => {
  const transcriptor = new Transcriptor()

  it('transcribes cytosine to guanine', () => {
    expect(transcriptor.toRna('C')).toEqual('G')
  })

  it('transcribes guanine to cytosine', () => {
    expect(transcriptor.toRna('G')).toEqual('C')
  })

  it('transcribes adenine to uracil', () => {
    expect(transcriptor.toRna('A')).toEqual('U')
  })

  it('transcribes thymine to adenine', () => {
    expect(transcriptor.toRna('T')).toEqual('A')
  })

  it('transcribes all dna nucleotides to their rna complements', () => {
    expect(transcriptor.toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU')
  })

  it('correctly handles invalid input', () => {
    expect(() => transcriptor.toRna('U')).toThrow(
      'Invalid input DNA.'
    )
  })

  it('correctly handles completely invalid input', () => {
    expect(() => transcriptor.toRna('XXX')).toThrow(
      'Invalid input DNA.'
    )
  })

  it('correctly handles partially invalid input', () => {
    expect(() => transcriptor.toRna('ACGTXXXCTTAA')).toThrow(
      'Invalid input DNA.'
    )
  })

})
