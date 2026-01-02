export interface Lesson {
	id: string;
	title: string;
	slug: string;
	author?: string;
	description: string;
}

export interface Cluster {
	id: number;
	title: string;
	slug: string;
	description: string;
	lessons: Lesson[];
}

export const clusters: Cluster[] = [
	{
		id: 1,
		title: 'Mediation Architecture & Reality Framing',
		slug: 'mediation-architecture',
		description: 'How devices function as mediating instruments that frame reality and make the incomprehensible navigable.',
		lessons: [
			{
				id: '1-1',
				title: 'The Social Construction of Reality',
				slug: 'social-construction-of-reality',
				author: 'Peter Berger & Thomas Luckmann',
				description: 'The foundational text for understanding how reality is socially constructed through shared meanings and institutions.'
			},
			{
				id: '1-2',
				title: 'Culture in Action: Symbols and Strategies',
				slug: 'culture-in-action',
				author: 'Ann Swidler',
				description: 'How culture provides a "toolkit" of symbols, stories, and rituals that people use to construct strategies of action.'
			},
			{
				id: '1-3',
				title: 'Framing',
				slug: 'framing',
				author: 'Erving Goffman',
				description: 'How we organize experience and make sense of the world through interpretive frames.'
			}
		]
	},
	{
		id: 2,
		title: 'Embodiment, Repetition & Internalization',
		slug: 'embodiment-repetition',
		description: 'How abstract concepts and material practices become integrated into human bodies and minds through repeated performance.',
		lessons: [
			{
				id: '2-1',
				title: 'The Logic of Practice',
				slug: 'logic-of-practice',
				author: 'Pierre Bourdieu',
				description: 'The concept of habitus—how social structures become embodied dispositions through practice.'
			},
			{
				id: '2-2',
				title: 'The Psychology of Rituals',
				slug: 'psychology-of-rituals',
				author: 'Cristine Legare & Rachel Watson-Jones',
				description: 'The cognitive and developmental psychology of how rituals shape human behavior and belief.'
			},
			{
				id: '2-3',
				title: 'Rituals and Embodied Cultural Practices',
				slug: 'rituals-embodied-practices',
				author: 'Ohaja et al.',
				description: 'How rituals function as embodied cultural practices that shape identity from the beginning of life.'
			},
			{
				id: '2-4',
				title: 'Repetition',
				slug: 'repetition',
				author: 'Søren Kierkegaard',
				description: 'The philosophical significance of repetition in human existence and meaning-making.'
			}
		]
	},
	{
		id: 3,
		title: 'Ritual Structures & Sacred Dimensions',
		slug: 'ritual-structures',
		description: 'How ritual operates as a universal human technology for organizing behavior and creating meaning.',
		lessons: [
			{
				id: '3-1',
				title: 'Ritual Theory, Ritual Practice',
				slug: 'ritual-theory-practice',
				author: 'Catherine Bell',
				description: 'A comprehensive theory of ritual as a strategic mode of practice that creates ritualized agents.'
			},
			{
				id: '3-2',
				title: 'Meaning and Embodiment in Ritual Practice',
				slug: 'meaning-embodiment-ritual',
				author: 'Boris Wiseman',
				description: 'How meaning is created and transmitted through the embodied performance of ritual.'
			}
		]
	},
	{
		id: 4,
		title: 'Technology, Material Culture & Non-Neutrality',
		slug: 'technology-material-culture',
		description: 'How devices—whether material or abstract—are never neutral tools but always serve purposes and shape reality.',
		lessons: [
			{
				id: '4-1',
				title: 'Technology as Material Culture',
				slug: 'technology-material-culture-lesson',
				author: 'W. David Kingery',
				description: 'How technology is embedded in and shaped by the broader material culture of a society.'
			},
			{
				id: '4-2',
				title: 'Embodiment, New Technologies and the Undead',
				slug: 'embodiment-new-technologies',
				author: 'Various',
				description: 'How new technologies reshape our embodied experience and sense of self.'
			},
			{
				id: '4-3',
				title: 'The Stuff of Life: Materiality and the Self',
				slug: 'stuff-of-life',
				author: 'L.M. Sacasas',
				description: 'How material objects shape our sense of self and our relationship to the world.'
			}
		]
	},
	{
		id: 5,
		title: 'Adoption, Diffusion & Network Effects',
		slug: 'adoption-diffusion',
		description: 'How devices spread through populations and become collectively adopted.',
		lessons: [
			{
				id: '5-1',
				title: 'The Diffusion of Innovations',
				slug: 'diffusion-innovations',
				author: 'Everett Rogers',
				description: 'The classic model of how new ideas and technologies spread through social systems.'
			},
			{
				id: '5-2',
				title: 'New Technology Adoption: Cultural Influences',
				slug: 'new-technology-adoption',
				author: 'Borkovich & Breese-Vitelli',
				description: 'How cultural fit determines the success or failure of technology adoption.'
			},
			{
				id: '5-3',
				title: 'The Social Shaping of Technology',
				slug: 'social-shaping-technology',
				author: 'Donald MacKenzie & Judy Wajcman',
				description: 'How social, economic, and political factors shape the development and use of technology.'
			}
		]
	},
	{
		id: 6,
		title: 'Language, Naming & Conceptual Devices',
		slug: 'language-naming',
		description: 'How language and naming function as devices that frame reality and create ownership over meaning.',
		lessons: [
			{
				id: '6-1',
				title: 'The Death of the Author',
				slug: 'death-of-author',
				author: 'Roland Barthes',
				description: 'How texts take on a life of their own, independent of their creators.'
			}
		]
	},
	{
		id: 7,
		title: 'Reality Construction & Media Devices',
		slug: 'reality-construction',
		description: 'How media devices construct our sense of reality.',
		lessons: [
			{
				id: '7-1',
				title: 'The Work of Art in the Age of Mechanical Reproduction',
				slug: 'work-of-art',
				author: 'Walter Benjamin',
				description: 'How mechanical reproduction changes the nature of art and our experience of reality.'
			},
			{
				id: '7-2',
				title: 'The Society of the Spectacle',
				slug: 'society-spectacle',
				author: 'Guy Debord',
				description: 'How social life is mediated by images and representations.'
			},
			{
				id: '7-3',
				title: 'Simulacra and Simulation',
				slug: 'simulacra-simulation',
				author: 'Jean Baudrillard',
				description: 'How we live in a world of copies without originals—the hyperreal.'
			}
		]
	},
	{
		id: 8,
		title: 'Ideology, Power & Device Non-Neutrality',
		slug: 'ideology-power',
		description: 'How devices function as instruments of power and social control.',
		lessons: [
			{
				id: '8-1',
				title: 'Discipline and Punish',
				slug: 'discipline-punish',
				author: 'Michel Foucault',
				description: 'How disciplinary power operates through surveillance and normalization.'
			},
			{
				id: '8-2',
				title: 'Ideology and Ideological State Apparatuses',
				slug: 'ideology-state-apparatuses',
				author: 'Louis Althusser',
				description: 'How ideology is embedded in institutions and how it constitutes us as subjects.'
			},
			{
				id: '8-3',
				title: 'Hegemony',
				slug: 'hegemony',
				author: 'Antonio Gramsci',
				description: 'How dominant classes maintain power through consent rather than coercion.'
			}
		]
	},
	{
		id: 9,
		title: 'Comparative Genesis & Competitive Dynamics',
		slug: 'comparative-genesis',
		description: 'The evolutionary and competitive dynamics that drive the emergence and spread of new devices.',
		lessons: [
			{
				id: '9-1',
				title: 'The Secret of Our Success',
				slug: 'secret-success',
				author: 'Joseph Henrich',
				description: 'How cumulative cultural evolution made humans the dominant species.'
			},
			{
				id: '9-2',
				title: 'Ultrasociety',
				slug: 'ultrasociety',
				author: 'Peter Turchin',
				description: 'How warfare drove the evolution of large-scale human cooperation.'
			},
			{
				id: '9-3',
				title: 'Mimetic Theory',
				slug: 'mimetic-theory',
				author: 'René Girard',
				description: 'How mimetic desire drives human conflict and the creation of culture.'
			}
		]
	}
];

export function getCluster(slug: string): Cluster | undefined {
	return clusters.find(c => c.slug === slug);
}

export function getLesson(clusterSlug: string, lessonSlug: string): { cluster: Cluster; lesson: Lesson } | undefined {
	const cluster = getCluster(clusterSlug);
	if (!cluster) return undefined;
	const lesson = cluster.lessons.find(l => l.slug === lessonSlug);
	if (!lesson) return undefined;
	return { cluster, lesson };
}
