interface ITranscriptor {
    toRna (nucleotides: string): string
}

class Transcriptor implements ITranscriptor {
    private static readonly transcription: Map<string, string> = new Map(
        [
            ['A', 'U'],
            ['T', 'A'],
            ['C', 'G'],
            ['G', 'C']
        ]
    )

    toRna(nucleotides: string) {
        let result: string = ""
        for (const dna of nucleotides) {
            const rna = Transcriptor.transcription.get(dna)
            if (rna === undefined) {
                throw 'Invalid input DNA.'
            }
            result += rna
        }
        return result
    }
}

export default Transcriptor