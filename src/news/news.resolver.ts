import { Args, Query, Resolver, Parent } from '@nestjs/graphql';
import {
	ArticleResponse,
	SourceResponse,
	SourceInput,
	HeadlineInput,
	EverythingInput
} from '../graphql.schema';
import { NewsApiService } from './news.service';

@Resolver('NewsApi')
export class NewsApiResolvers {
	constructor(private readonly newService: NewsApiService) {}

	@Query('everything')
	async everything(
		@Args('q') q: string,
		@Args('options') options: EverythingInput
	): Promise<ArticleResponse> {
		return await this.newService.everything(q, options);
	}

	@Query('topHeadlines')
	async topHeadlines(
		@Args('q') q: string,
		@Args('options') options: HeadlineInput
	): Promise<ArticleResponse> {
		return await this.newService.topHeadlines(q, options);
	}

	@Query('sources')
	async sources(
		@Parent() parent,
		@Args('options') options: SourceInput
	): Promise<SourceResponse> {
		return await this.newService.sources(options);
	}
}
