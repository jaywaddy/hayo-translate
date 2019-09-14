// Dictionary.
const App = {

    word: [
        // A
        { eng: 'A', plc: 'a', pos: 'con', pro: 'ey'},
        { eng: 'A.M.', plc: 'e.d.', pos: 'n', pro: 'eh-day'},
        { eng: 'Ability', plc: 'balitra', pos: 'n', pro: 'bal-ee-tra'},
        { eng: 'Able', plc: 'bali', pos: 'adj', pro: 'ba-lee'},
        { eng: 'Aboard', plc: 'embountae', pos: 'adv', pro: 'em-bown-tay'},
        { eng: 'About', plc: 'aboue', pos: 'prep', pro: 'a-boo-ay'},
        { eng: 'Above', plc: 'ombarn', pos: 'prep', pro: 'om-barn'},
        { eng: 'Absolute', plc: 'aberserton', pos: 'adj', pro: 'ab-er-ser-ton'},
        { eng: 'Access', plc: 'nobar', pos: 'v/n', pro: 'no-bar'},
        { eng: 'Accident', plc: 'hozuf', pos: 'n', pro: 'hoz-uf'},
        { eng: 'Account', plc: 'tencu', pos: 'v/n', pro: 'ten-koo'},
        { eng: 'Accumulate', plc: 'amelorae', pos: 'v', pro: 'am-el-o-ray'},
        { eng: 'Ace', plc: 'dhalass', pos: 'adj', pro: 'dal-ass'},
        { eng: 'Achieve', plc: 'stama', pos: 'v', pro: 'stam-a'},
        { eng: 'Across', plc: 'atarx', pos: 'prep', pro: 'a-tarks'},
        { eng: 'Act', plc: 'blaf', pos: 'v/n', pro: 'blaf'},
        { eng: 'Activate', plc: 'enbelt', pos: 'v', pro: 'en-belt'},
        { eng: 'Active', plc: 'acriq', pos: 'adj', pro: 'ah-creek'},
        { eng: 'Adapt', plc: 'asinom', pos: 'v', pro: 'ah-sin-om'},
        { eng: 'Add', plc: 'dab', pos: 'v', pro: 'dab'},
        { eng: 'Address', plc: 'camart', pos: 'v/n', pro: 'ca-mart'},
        { eng: 'Adjust', plc: 'jasp', pos: 'v', pro: 'jasp'},
        { eng: 'Adore', plc: 'arado', pos: 'v', pro: 'ah-rad-o'},
        { eng: 'Adult', plc: 'stermis', pos: 'n', pro: 'ster-mis'},
        { eng: 'Advance', plc: 'carsh', pos: 'v', pro: 'carsh'},
        { eng: 'Advent', plc: 'jevo', pos: 'n', pro: 'jev-o'},
        { eng: 'Adventure', plc: 'jevola', pos: 'n', pro: 'jev-o-la'},
        { eng: 'Advertise', plc: 'vadatolen', pos: 'v', pro: 'va-dah-toe-len'},
        { eng: 'Affect', plc: 'afun', pos: 'v', pro: 'af-un'},
        { eng: 'Affirm', plc: 'erfar', pos: 'v', pro: 'er-far'},
        { eng: 'After', plc: 'terfa', pos: 'prep', pro: 'ter-fa'},
        { eng: 'Again', plc: 'repet', pos: 'adv', pro: 'rep-et'},
        { eng: 'Age', plc: 'aju', pos: 'v', pro: 'a-joo'},
        { eng: 'Ago', plc: 'agons', pos: 'adv', pro: 'ey-gons'},
        { eng: 'Ah', plc: 'ah', pos: 'con', pro: 'ah'},
        { eng: 'Aid', plc: 'ezen', pos: 'v/n', pro: 'ez-en'},
        { eng: 'Air', plc: 'arae', pos: 'n', pro: 'a-ray'},
        { eng: 'Algorithm', plc: 'athoram', pos: 'n', pro: 'ath-or-am'},
        { eng: 'Alien', plc: 'satihaxo', pos: 'n', pro: 'sat-ee-haks-o'},
        { eng: 'Align', plc: 'anhep', pos: 'v', pro: 'an-hep'},
        { eng: 'Alive', plc: 'ahenow', pos: 'adj', pro: 'a-hen-ow'},
        { eng: 'All', plc: 'allo', pos: 'adv', pro: 'al-o'},
        { eng: 'Allow', plc: 'mittel', pos: 'v', pro: 'mit-tel'},
        { eng: 'Alloy', plc: 'aleyo', pos: 'adj', pro: 'al-ay-o'},
        { eng: 'Almost', plc: 'alstum', pos: 'adv', pro: 'al-stum'},
        { eng: 'Alone', plc: 'anamu', pos: 'adv', pro: 'a-nam-oo'},
        { eng: 'Along', plc: 'akinth', pos: 'adv', pro: 'a-kinth'},
        { eng: 'Alpha', plc: 'alpha', pos: 'n', pro: 'al-fa'},
        { eng: 'Alpine', plc: 'plinta', pos: 'adj', pro: 'plin-ta'},
        { eng: 'Also', plc: 'alvu', pos: 'con', pro: 'al-voo'},
        { eng: 'Alternate', plc: 'atalun', pos: 'adj', pro: 'at-ah-lun'},
        { eng: 'Although', plc: 'allotum', pos: 'con', pro: 'al-o-tum'},
        { eng: 'Altitude', plc: 'ertirdar', pos: 'n', pro: 'er-teer-dar'},
        { eng: 'Always', plc: 'alvaras', pos: 'adv', pro: 'al-va-ras'},
        { eng: 'Am', plc: 'sar', pos: 'v', pro: 'sar'},
        { eng: 'Amaze', plc: 'zamal', pos: 'v', pro: 'za-marl'},
        { eng: 'America', plc: 'Merraco', pos: 'n', pro: 'mer-rak-o'},
        { eng: 'Amount', plc: 'lotar', pos: 'n', pro: 'lo-tar'},
        { eng: 'Amuse', plc: 'seheta', pos: 'v', pro: 'seh-het-a'},
        { eng: 'An', plc: 'ayn', pos: 'con', pro: 'eyn'},
        { eng: 'Anagram', plc: 'magarna', pos: 'n', pro: 'mag-ar-na'},
        { eng: 'Ancient', plc: 'shenta', pos: 'adj', pro: 'shen-ta'},
        { eng: 'And', plc: 'at', pos: 'con', pro: 'at'},
        { eng: 'Angle', plc: 'guvai', pos: 'n', pro: 'goo-vye'},
        { eng: 'Animal', plc: 'muupa', pos: 'n', pro: 'moo-pah'},
        { eng: 'Animate', plc: 'onbyrae', pos: 'v', pro: 'on-by-ray'},
        { eng: 'Anniversary', plc: 'abbonibo', pos: 'n', pro: 'ab-on-ee-bo'},
        { eng: 'Announce', plc: 'nunsai', pos: 'v', pro: 'nun-say'},
        { eng: 'Annual', plc: 'aleniso', pos: 'adj', pro: 'al-en-ee-so'},
        { eng: 'Another', plc: 'aynotaer', pos: 'adv', pro: 'eyn-oh-tay-er'},
        { eng: 'Answer', plc: 'ryamon', pos: 'v/n', pro: 'ry-a-mon'},
        { eng: 'Any', plc: 'inla', pos: 'pron', pro: 'in-la'},
        { eng: 'Appeal', plc: 'rurnar', pos: 'v', pro: 'rurn-ar'},
        { eng: 'Appear', plc: 'tadar', pos: 'v', pro: 'ta-dar'},
        { eng: 'Apple', plc: 'apol', pos: 'n', pro: 'a-pol'},
        { eng: 'Apply', plc: 'ulvass', pos: 'v', pro: 'ul-vas'},
        { eng: 'Approach', plc: 'tinclo', pos: 'v/n', pro: 'tin-cloe'},
        { eng: 'April', plc: 'vrish', pos: 'n', pro: 'vreesh'},
        { eng: 'Arcade', plc: 'kardae', pos: 'n', pro: 'kar-day'},
        { eng: 'Arch', plc: 'achoro', pos: 'n', pro: 'ac-hor-o'},
        { eng: 'Archaeology', plc: 'ajalovti', pos: 'n', pro: 'a-jal-ov-tee'},
        { eng: 'Arctic', plc: 'norpo', pos: 'adj', pro: 'nor-po'},
        { eng: 'Are', plc: 'say', pos: 'v', pro: 'say'},
        { eng: 'Area', plc: 'balsio', pos: 'n', pro: 'n'},
        { eng: 'Arm', plc: 'relon', pos: 'n', pro: 'rel-on'},
        { eng: 'Around', plc: 'arunama', pos: 'adv', pro: 'ah-run-ar-ma'},
        { eng: 'Array', plc: 'arefa', pos: 'n', pro: 'ah-ref-a'},
        { eng: 'Arrow', plc: 'aboln', pos: 'n', pro: 'a-boln'},
        { eng: 'Art', plc: 'atel', pos: 'n', pro: 'at-el'},
        { eng: 'As', plc: 'es', pos: 'con', pro: 'ez'},
        { eng: 'Ascend', plc: 'jusor', pos: 'v', pro: 'joo-sor'},
        { eng: 'Ask', plc: 'jev', pos: 'v', pro: 'jev'},
        { eng: 'Assemble', plc: 'hucatho', pos: 'v', pro: 'hoo-ka-tho'},
        { eng: 'Asset', plc: 'asepa', pos: 'n', pro: 'as-ep-a'},
        { eng: 'Assign', plc: 'abblatur', pos: 'v', pro: 'ab-bla-tur'},
        { eng: 'Assure', plc: 'truul', pos: 'v', pro: 'trool'},
        { eng: 'Asteroid', plc: 'redarsta', pos: 'n', pro: 'red-ar-sta'},
        { eng: 'At', plc: 'ab', pos: 'prep', pro: 'ab'},
        { eng: 'ATM', plc: 'ASK', pos: 'n', pro: 'ey-es-kay'},
        { eng: 'Atmosphere', plc: 'azalmosonspa', pos: 'n', pro: 'a-zal-mo-son-spa'},
        { eng: 'Attach', plc: 'plap', pos: 'v', pro: 'plap'},
        { eng: 'Attempt', plc: 'apaetun', pos: 'v', pro: 'a-pay-tun'},
        { eng: 'Attentive', plc: 'somavo', pos: 'adj', pro: 'so-mah-vo'},
        { eng: 'Attract', plc: 'netum', pos: 'v', pro: 'net-um'},
        { eng: 'Auction', plc: 'acuutiza', pos: 'n', pro: 'ah-coot-ee-za'},
        { eng: 'Audio', plc: 'claba', pos: 'n', pro: 'cla-ba'},
        { eng: 'August', plc: 'gassatu', pos: 'n', pro: 'gas-a-too'},
        { eng: 'Authentic', plc: 'ampetol', pos: 'adj', pro: 'am-pet-ol'},
        { eng: 'Author', plc: 'orlan', pos: 'v/n', pro: 'or-lan'},
        { eng: 'Autocomplete', plc: 'abzifoman', pos: 'v', pro: 'ab-zee-fo-man'},
        { eng: 'Automate', plc: 'abziyerf', pos: 'v', pro: 'ab-zee-yerf'},
        { eng: 'Autosave', plc: 'abziliida', pos: 'v/n', pro: 'ab-zee-lee-da'},
        { eng: 'Autumn', plc: 'arfres', pos: 'n', pro: 'ar-fres'},
        { eng: 'Avail', plc: 'utu', pos: 'v', pro: 'oo-too'},
        { eng: 'Avatar', plc: 'madija', pos: 'n', pro: 'ma-deej-a'},
        { eng: 'Average', plc: 'beotha', pos: 'v/n', pro: 'be-o-tha'},
        { eng: 'Avoid', plc: 'agawae', pos: 'v', pro: 'ag-a-way'},
        { eng: 'Await', plc: 'ahalp', pos: 'v', pro: 'ey-halp'},
        { eng: 'Awake', plc: 'aveesh', pos: 'v', pro: 'a-veesh'},
        { eng: 'Awaken', plc: 'aveeshel', pos: 'v', pro: 'a-veesh-el'},
        { eng: 'Aware', plc: 'amiba', pos: 'adj', pro: 'a-mib-a'},
        { eng: 'Away', plc: 'avara', pos: 'adv', pro: 'a-va-ra'},
        { eng: 'Awe', plc: 'owa', pos: 'n', pro: 'ow-a'},
        { eng: 'Awning', plc: 'amvoler', pos: 'n', pro: 'am-vo-la'},
        { eng: 'Axis', plc: 'sizay', pos: 'n', pro: 'see-zay'},
        { eng: 'Axle', plc: 'eljun', pos: 'n', pro: 'el-jun'},
        { eng: 'Aztec', plc: 'Azarta', pos: 'adj', pro: 'az-ar-ta'},
        // B

        // C

        // D

        // E

        // F

        // G


        // H
        { eng: 'hello', plc: 'hayo' },

        // I

        // J

        // K

        // L

        // M

        // N

        // O

        // P

        // Q

        // R

        // S

        // T

        // U

        // V

        // W
        { eng: 'world', plc: 'wuntow' },

        // X

        // Y
        { eng: 'Ya', plc: 'eh', pos: 'interjection', pro: 'eh'},
        { eng: 'Yaw', plc: 'yirq', pos: 'n', pro: 'yerk'},
        { eng: 'Yay', plc: 'dibu', pos: 'interjection', pro: 'dib-oo'},
        { eng: 'Yeah', plc: 'yah', pos: 'interjection', pro: 'yah'},
        { eng: 'Year', plc: 'yarre', pos: 'n', pro: 'yah-ra'},
        { eng: 'Yellow', plc: 'tepeli', pos: 'adj', pro: 'tep-el-ee'},
        { eng: 'Yes', plc: 'yas', pos: 'adv', pro: 'yas'},
        { eng: 'Yesterday', plc: 'predeyo', pos: 'n', pro: 'pre-day-o'},
        { eng: 'Yet', plc: 'yata', pos: 'adv', pro: 'ya-ta'},
        { eng: 'You', plc: 'oe', pos: 'pron', pro: 'oh'},
        { eng: 'Your', plc: 'oema', pos: 'pron', pro: 'oh-ma'},
        { eng: 'Yours', plc: 'oemas', pos: 'pron', pro: 'oh-mas'},

        // Z
        { eng: 'Zero', plc: 'zoop', pos: 'num', pro: 'zoop'},
        { eng: 'Zero-G', plc: 'Zoop-G', pos: 'n', pro: 'zoop-jee'},
        { eng: 'Zone', plc: 'zinn', pos: 'n', pro: 'zin'},
        { eng: 'Zoom', plc: 'zuul', pos: 'v', pro: 'zool'},
    ]
    
};