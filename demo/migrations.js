/// <reference path="../pb_data/types.d.ts" />
migrate(
	(db) => {
		const snapshot = [
			{
				id: '_pb_users_auth_',
				created: '2024-05-23 13:22:31.189Z',
				updated: '2024-05-23 13:28:14.072Z',
				name: 'users',
				type: 'auth',
				system: false,
				schema: [
					{
						system: false,
						id: 'users_name',
						name: 'name',
						type: 'text',
						required: false,
						presentable: false,
						unique: false,
						options: {
							min: null,
							max: null,
							pattern: '',
						},
					},
					{
						system: false,
						id: 'users_avatar',
						name: 'avatar',
						type: 'file',
						required: false,
						presentable: false,
						unique: false,
						options: {
							mimeTypes: [
								'image/jpeg',
								'image/png',
								'image/svg+xml',
								'image/gif',
								'image/webp',
							],
							thumbs: null,
							maxSelect: 1,
							maxSize: 5242880,
							protected: false,
						},
					},
				],
				indexes: [],
				listRule: 'id = @request.auth.id',
				viewRule: 'id = @request.auth.id',
				createRule: '',
				updateRule: 'id = @request.auth.id',
				deleteRule: 'id = @request.auth.id',
				options: {
					allowEmailAuth: false,
					allowOAuth2Auth: false,
					allowUsernameAuth: false,
					exceptEmailDomains: null,
					manageRule: null,
					minPasswordLength: 8,
					onlyEmailDomains: null,
					onlyVerified: false,
					requireEmail: false,
				},
			},
			{
				id: '931gvmrrhozr7g5',
				created: '2024-05-23 16:21:18.605Z',
				updated: '2024-05-23 16:21:18.605Z',
				name: 'words',
				type: 'base',
				system: false,
				schema: [
					{
						system: false,
						id: '23mssejf',
						name: 'word',
						type: 'text',
						required: false,
						presentable: false,
						unique: false,
						options: {
							min: null,
							max: null,
							pattern: '',
						},
					},
				],
				indexes: [],
				listRule: '',
				viewRule: '',
				createRule: '',
				updateRule: null,
				deleteRule: null,
				options: {},
			},
		];

		const collections = snapshot.map((item) => new Collection(item));

		return Dao(db).importCollections(collections, true, null);
	},
	(db) => {
		return null;
	},
);
