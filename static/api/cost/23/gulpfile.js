(() => {

    'use strict';

    /**************** Gulp.js 4 configuration ****************/
    /**************** get district from api raja ongkir ****************/

    const
        // modules
        gulp = require('gulp'),
        request = require('request'),
        source = require('vinyl-source-stream'),
        es = require('event-stream'),
		qs = require("querystring"),

        cost = 'cost',
		origin = 23,
        districts = [4701, 4702, 4703, 4704, 4705, 4706, 4707, 4708, 4709, 4710, 4711, 4712, 4713, 4714, 4715, 4716, 4717, 4718, 4719, 4720, 4721, 4722, 4723, 4724, 4725, 4726, 4727, 4728, 4729, 4730, 4731, 4732, 4733, 4734, 4735, 4736, 4737, 4738, 4739, 4740, 4741, 4742, 4743, 4744, 4745, 4746, 4747, 4748, 4749, 4750, 4751, 4752, 4753, 4754, 4755, 4756, 4757, 4758, 4759, 4760, 4761, 4762, 4763, 4764, 4765, 4766, 4767, 4768, 4769, 4770, 4771, 4772, 4773, 4774, 4775, 4776, 4777, 4778, 4779, 4780, 4781, 4782, 4783, 4784, 4785, 4786, 4787, 4788, 4789, 4790, 4791, 4792, 4793, 4794, 4795, 4796, 4797, 4798, 4799, 4800, 4801, 4802, 4803, 4804, 4805, 4806, 4807, 4808, 4809, 4810, 4811, 4812, 4813, 4814, 4815, 4816, 4817, 4818, 4819, 4820, 4821, 4822, 4823, 4824, 4825, 4826, 4827, 4828, 4829, 4830, 4831, 4832, 4833, 4834, 4835, 4836, 4837, 4838, 4839, 4840, 4841, 4842, 4843, 4844, 4845, 4846, 4847, 4848, 4849, 4850, 4851, 4852, 4853, 4854, 4855, 4856, 4857, 4858, 4859, 4860, 4861, 4862, 4863, 4864, 4865, 4866, 4867, 4868, 4869, 4870, 4871, 4872, 4873, 4874, 4875, 4876, 4877, 4878, 4879, 4880, 4881, 4882, 4883, 4884, 4885, 4886, 4887, 4888, 4889, 4890, 4891, 4892, 4893, 4894, 4895, 4896, 4897, 4898, 4899, 4900,]


    /**************** JS task ******************/
    async function getCost() {
        return es.merge(districts.map(function (district) {
            return request({
					method: 'post',
                    url: 'https://pro.rajaongkir.com/api/cost',
                    headers: {
                        'key': '50239866a52032066bbe3ad925e24695',
						'content-type': 'application/x-www-form-urlencoded'
                    },
					body: qs.stringify({
					  origin: origin,
					  originType: 'city',
					  destination: district,
					  destinationType: 'subdistrict',
					  weight: 1000,
					  courier: 'jne:pos:tiki:jnt:wahana:sicepat:lion:jet:pahala:ninja'
					})
                })
                .pipe(source(district + '/index.md'))
                .pipe(gulp.dest(cost + '/'));
        }))
    }
    exports.getCost = getCost;

    /**************** default task ****************/

    exports.default = gulp.series(exports.getCost);

})();